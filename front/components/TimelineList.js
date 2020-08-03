import TimelineListItem from "./TimeLineListItem";

export default function TimelineList({program}) {
  const timeline = {
      ftseoul: [
      {
        edu: `false`,
        name: '2기 1차 라피신',
        description: '본과정 선발을 위한 집중 교육 과정',
        startdate: '2020-06-29',
        enddate: '2020-07-24',
      },
      {
        edu: 'false',
        name: '2기 2차 라피신',
        description: '본과정 선발을 위한 집중 교육 과정',
        startdate: '2020-07-27',
        enddate: '2020-08-24',
      },
      {
        edu: 'true',
        name: '2기 본과정',
        description: '2기 1차와 2차 본과정 시작',
        startdate: '2020-09-01',
        enddate: '2022-09-01',
      },
      {
        edu: 'false',
        name: '3기 1차 라피신',
        description: '본과정 선발을 위한 집중 교육 과정',
        startdate: '2020-08-31',
        enddate: '2020-09-25',
      },
      {
        edu: 'false',
        name: '3기 2차 라피신',
        description: '본과정 선발을 위한 집중 교육 과정',
        startdate: '2020-10-05',
        enddate: '2020-10-30',
      },
      {
        edu: 'true',
        name: '3기 본과정',
        description: '3기 1차와 2차 본과정 시작',
        startdate: '2020-11-15',
        enddate: '2022-11-15',
      },
    ],
    ssafy: [
      {
        edu: `false`,
        name: '접수기간',
        description: '4기 서류 접수',
        startdate: '2020-05-11',
        enddate: '2020-05-25',
      },
      {
        edu: 'false',
        name: '1차 선발과정',
        description: '온라인 SW 적성진단',
        startdate: '2020-06-06',
        enddate: '2020-06-06',
      },
      {
        edu: 'false',
        name: '2차',
        description: '현장 인터뷰',
        startdate: '2020-06-17',
        enddate: '2022-06-19',
      },
      {
        edu: 'true',
        name: '교육 시작',
        description: '입과 및 교육',
        startdate: '2020-07-07',
        enddate: '2020-08-07',
      },
    ],
    boostcamp: [
      {
        edu: `false`,
        name: '접수기간',
        description: '4기 서류지원',
        startdate: '2020-06-01',
        enddate: '2020-06-30',
      },
      {
        edu: 'false',
        name: '1차',
        description: '온라인 코딩테스트',
        startdate: '2020-07-04',
        enddate: '2020-07-04',
      },
      {
        edu: 'false',
        name: '2차',
        description: '온라인 코딩테스트',
        startdate: '2020-07-11',
        enddate: '2020-07-11',
      },
      {
        edu: 'false',
        name: '최종 합격자 발표',
        description: '부스트캠프 챌린지 합격',
        startdate: '2020-07-20',
        enddate: '2020-07-20',
      },
      {
        edu: 'false',
        name: '부스트캠프 챌린지',
        description: '수료자 중에서 선발',
        startdate: '2020-07-27',
        enddate: '2020-08-21',
      },
      {
        edu: 'true',
        name: '부스트캠프 멤버쉽',
        description: '선발자만 부스트캠프 멤버쉽 참가 가능',
        startdate: '2020-08-31',
        enddate: '2020-12-21',
      },
    ],
    soma: [
      {
        edu: `false`,
        name: '접수기간',
        description: '11기 서류 접수',
        startdate: '2020-01-22',
        enddate: '2020-02-21',
      },
      {
        edu: `false`,
        name: '1차 전형',
        description: '온라인 코딩테스트',
        startdate: '2020-03-14',
        enddate: '2020-03-14',
      },
      {
        edu: `false`,
        name: '인적성 검사',
        description: '온라인 AI 인적성 검사',
        startdate: '2020-04-08',
        enddate: '2020-05-06',
      },
      {
        edu: `false`,
        name: '2차 전형',
        description: '온라인 코딩테스트',
        startdate: '2020-04-26',
        enddate: '2020-04-26',
      },
      {
        edu: `false`,
        name: '심층면접',
        description: '오프라인 심층면접',
        startdate: '2020-05-08',
        enddate: '2020-05-09',
      },
      {
        edu: `true`,
        name: '본과정',
        description: '6개월 연수과정',
        startdate: '2020-06-01',
        enddate: '2020-11-30',
      },
    ],
    woowa: [
      {
        edu: 'false',
        name: '2기 선발 마감',
        description: '3기 2021년 시작 예정',
        startdate: '2019-10-25',
        enddate: '2020-1-03',
      },
    ],
    likelion: [
      {
        edu: `false`,
        name: '2020년 선발 마감',
        description: '선발절차는 대학별 상이',
        startdate: '2020-03-17',
        enddate: '2020-03-17',
      },
    ]
}

  return (
    <>
    {timeline[program].map((v, index, id) => <TimelineListItem data={v} key={index} id={index} />)}
  </>
)
}