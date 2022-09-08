import { daysType, defaultDaysData, gymRoutineData } from './data';

export const createRoutine = (days = defaultDaysData) => {
  const today = new Date();

  const daysToRemoveArray = [...days.remove];
  var index = 0;

  function* searchMuscle(): Generator<any, any, any> {
    console.log(index);
    while (index <= 6) {
      index++;
      daysToRemoveArray.push(index);
      const target = findMuscle(index--, daysToRemoveArray)
      yield target;
    }
  }

  const muscle = searchMuscle();

  const routines = gymRoutineData.reduce((acc: any, el, i) => {
    const muscleData = muscle.next().value

    acc.value.push(muscleData.muscle)

    return {
      value: acc,
      previous: muscleData.id
    }
  }, {
    value: [],
    previous: undefined
  })

  return {
    routines,
    dayOfWeek: today.getDay(),
  };
};

export const findMuscle = (
  previousID: number,
  remove?: number[],
  dependenceLevel = 0,
) => {
  const muscle = gymRoutineData.find((el) => el.dependence.length === dependenceLevel && previousID !== el.id)
  return {
    muscle,
    id: muscle?.id
  };
};
