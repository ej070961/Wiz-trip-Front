import { useActionData } from 'react-router-dom';
import * as S from '../../styles/planboard.style';
import { createSelectTimes } from '../../utils/createSelectTimes';
import { hours24 } from '../../utils/HoursAday';
import { useEffect, useState } from 'react';
import GridLayout from 'react-grid-layout';
import AddPlanIcon from '../../assets/add-plan-icon';
import PlanDetailCard from './PlanDetailCard';
import { clockTimes } from '../../utils/createSelectTimes';
import { useSelector } from 'react-redux';
import SlidePrevIcon from '../../assets/slide-prev-icon';
import SlideNextIcon from '../../assets/slide-next-icon';
import { element } from 'prop-types';
import { createTimestamp } from '../../utils/createTimestamp';
import { useMutation, useQueryClient } from 'react-query';
import { updatePlan } from '../../apis/api/plan';
function PlanBoard({
  days,
  setIsOpenModal,
  setDefaultDate,
  setCurrentSpot,
  plans,
  tripId,
}) {
  const times = createSelectTimes();
  const [slidePx, setSlidePx] = useState(0); //day수가 3이상일 경우 slide
  const [mylayout, setMyLayout] = useState([]);
  const [dragElement, setDragElement] = useState({});

  const toPrev = () => {
    if (slidePx < 0) setSlidePx(slidePx + 705);
  };
  const toNext = () => {
    if (slidePx > -1410) setSlidePx(slidePx - 705);
  };

  useEffect(() => {
    console.log('plan', plans);
    const l = [];
    plans.forEach((p, index) => {
      //timestamp를 index로 변환하기
      const today = p.startTime?.slice(0, 10);
      const todayIndex = days.findIndex((date) => date.date_full === today);
      const trim_startTime = p.startTime?.slice(11);
      const trim_endTime = p.finishTime?.slice(11);
      const startIndex = clockTimes.findIndex(
        (time) => time.text === trim_startTime,
      );
      const endIndex = clockTimes.findIndex(
        (time) => time.text == trim_endTime,
      );
      const gap = ~~endIndex - ~~startIndex;
      // { i: 'random', x: plans.day, y: palns.startIndex, w:1, h: ~~endIndex, static: false }
      const newPlan = {
        i: p.planId.toString(),
        x: ~~todayIndex,
        y: ~~startIndex,
        w: 1,
        h: gap,
      };
      l.push(newPlan);
    });
    setMyLayout(() => [...l]);
  }, [plans, days]);

  //drag and drop event
  const handleDragStart = (layout, e, element) => {
    //수정해도 되는지 여부 전달받기 추가
    setDragElement(e); //현재 drag 시작된 요소 저장
  };
  const handleDrag = (e, element) => {
    //console.log('ondrag', e, element);
  };
  const handleDragEnd = (layout, e, element, newItem, oldItem) => {
    if (dragElement !== element) {
      //element가 움직였을 때만 update
      submit(element.x, element.y, element.h, element.i);
    }
  };

  //x: 수정된 날짜 ,  y: 수정된 시작시간, h: 시간시간과 종료시간 사이의 gap, i: 몇번째 요소인지
  const submit = (newDay, newStartIndex, gap, planId) => {
    const new_date = days[newDay];
    const obj = createTimestamp(new_date.date_full, newStartIndex, ~~gap);
    const newPlan = {
      planId: planId,
      startTime: obj.startTimestamp,
      finishTime: obj.endTimestamp,
    };
    console.log('update된 plan', newPlan);
    updatePlanMutation.mutate(newPlan);
  };

  const queryClient = useQueryClient();
  const updatePlanMutation = useMutation({
    mutationFn: (newPlan) => updatePlan(tripId, newPlan),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getAllPlan'] });
    },
  });

  return (
    <S.BoardBox>
      <div className="timeline">
        <div className="board-header"> </div>
        {hours24.map((time, i) => (
          <div className="time-entity" key={i}>
            {time.hour_eng}
          </div>
        ))}
      </div>
      <S.SlideNav>
        <S.SlideItemWrapper slide={slidePx}>
          <div className="schedule-table">
            {days &&
              days.map((day, dayi) => (
                <div className="oneday-schedule" key={dayi}>
                  <div className="gap">
                    <div className="board-header"></div>
                    {hours24.map((time, timei) => (
                      <div className="gap-entity" key={timei}></div>
                    ))}
                  </div>
                  <div className="contents">
                    <div className="board-header">
                      {day.date_trimed} <strong> {day.day}</strong>
                      <button
                        className="add-plan-button"
                        onClick={() => {
                          setIsOpenModal(true);
                          setDefaultDate(day.date_trimed);
                        }}
                      >
                        <AddPlanIcon />
                      </button>
                    </div>
                    {times.map((time, timei) => (
                      <div className="minute-entity" key={timei}>
                        {' '}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
          {mylayout && (
            <GridLayout
              className="grid-drag-board"
              cols={days.length}
              rowHeight={12}
              width={242 * days.length}
              preventCollision={true}
              compactType={null}
              margin={[24, 0]}
              layout={mylayout}
              onDragStart={handleDragStart}
              onDrag={handleDrag}
              onDragStop={handleDragEnd}
            >
              {plans?.map((p, index) => {
                return (
                  <div key={p.planId.toString()}>
                    <PlanDetailCard
                      setIsOpenFormModal={setIsOpenModal}
                      address={p.address}
                      content={p.content}
                      category={p.category}
                      userId={p.userId}
                      setCurrentSpot={setCurrentSpot}
                      planId={p.planId}
                      tripId={p.tripId}
                    />
                  </div>
                );
              })}
            </GridLayout>
          )}
        </S.SlideItemWrapper>
      </S.SlideNav>
    </S.BoardBox>
  );
}
export default PlanBoard;
