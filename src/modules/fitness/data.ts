type muscle = {
  id: number,
  name: string,
  dependence: number[],
}

export type daysType = {
  completed: number[];
  remove: number[];
};

export const defaultDaysData: daysType = {
  completed: [],
  remove: [0, 6]
}

type gymRoutineDataType = muscle[];

export const gymRoutineData: gymRoutineDataType = [
  {
    id: 0,
    name: 'Peitoral',
    dependence: [5]
  },
  {
    id: 1,
    name: 'Biceps',
    dependence: []
  },
  {
    id: 2,
    name: 'Coxa',
    dependence: [2]
  },
  {
    id: 3,
    name: 'Glúteos',
    dependence: [3]
  },
  {
    id: 4,
    name: 'Panturrilha',
    dependence: []
  },
  {
    id: 5,
    name: 'Costas',
    dependence: [0]
  },
  {
    id: 6,
    name: 'Triceps',
    dependence: []
  },
  {
    id: 7,
    name: 'Ombro e Trapézio e AnteBraço',
    dependence: []
  },
  {
    id: 8,
    name: 'Abdominal',
    dependence: []
  },
]