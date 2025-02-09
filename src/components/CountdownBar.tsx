import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { logEditedCells } from "../store/tableSlice";
import styled from "styled-components";

const Bar = styled.div`
  height: 1.625rem;
  width: 42.5rem;
  border-radius: 1.125rem;
  background-color: #ffae12;
  transition: width 1s linear;
`;

const CountdownBar: React.FC = () => {
  const dispatch = useDispatch();
  const lastEditTime = useSelector(
    (state: RootState) => state.table.lastEditTime
  );
  const isCounting = useSelector((state: RootState) => state.table.isCounting);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isWaiting, setIsWaiting] = useState(true);
  const timeLeftRef = useRef(10);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const delayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      if (timeLeftRef.current <= 1) {
        clearInterval(timerRef.current!);
        timerRef.current = null;
        dispatch(logEditedCells());
        timeLeftRef.current = 10;
        setTimeLeft(timeLeftRef.current);
      } else {
        timeLeftRef.current -= 1;
        setTimeLeft(timeLeftRef.current);
      }
    }, 1000);
  };

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    if (!lastEditTime) return;

    const now = Date.now();
    const timeSinceLastEdit = now - lastEditTime;

    if (timeSinceLastEdit < 5000) {
      setIsWaiting(true);
      if (delayTimerRef.current) clearTimeout(delayTimerRef.current);

      delayTimerRef.current = setTimeout(() => {
        setIsWaiting(false);
        timeLeftRef.current = 10;
        setTimeLeft(timeLeftRef.current);
        startTimer();
      }, 5000 - timeSinceLastEdit);
    }

    if (timeSinceLastEdit >= 5000 && !timerRef.current) {
      setIsWaiting(false);
      timeLeftRef.current = 10;
      setTimeLeft(timeLeftRef.current);
      startTimer();
    }

    return () => {
      if (delayTimerRef.current) clearTimeout(delayTimerRef.current);
      clearTimer();
    };
  }, [lastEditTime]);

  if (isWaiting || !isCounting) return null;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <span>Отправка данных через {timeLeft} секунд</span>
      <div
        style={{
          width: "42.5rem",
          background: "#E3E3E3",
          borderRadius: "1.125rem",
        }}
      >
        <Bar style={{ width: `${(timeLeft / 10) * 100}%` }} />
      </div>
    </div>
  );
};

export default CountdownBar;
