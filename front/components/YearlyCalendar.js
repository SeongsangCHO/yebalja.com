import React from 'react';
import styles from './YearlyCalendar.module.css'
import classNames from 'classnames';
import Header from "./Header";
import CTA from "./CTA";

function YearByWeekLines() {
    
	return (
		 <>
			 <div className={classNames({[styles.gantt__row]: true, [styles.gantt__row__months]: true})}>
				 <div className={styles.gantt__row__first}></div>
				 {Array(12).fill('').map((v, idx) => <span>{idx+1}월</span>)}
			 </div>
			 <div className={classNames({[styles.gantt__row]: true, [styles.gantt__row__lines]: true})}>
				 {Array(12).fill('').map((v, idx) => <span></span>)}
			 </div>
		 </>
	 )
 }

function ProgramList() {

    const ProgramData = [
        {
            "idName" : "ftseoul",
            "title" : "42 Seoul",
            "gisuData" : [
                {
                    "gisu": "1기",
                    "visible" : 1,
                    "step": [
                        {
                            title:  "지원",
                            period: "상시모집",
                            startDate: "2020-01-01",
                            endDate: "2020-12-31",
                        },
                        {
                            title: "라피신",
                            period: "1/23 ~ 2/16",
                            startDate: "2020-01-23",
                            endDate: "2020-02-16",
                        },
                        {
                            title: "교육",
                            period: "2/27 ~ 최대 2년",
                            startDate: "2020-02-27",
                            endDate: "2020-12-50", //내년으로 넘어가는 일정은 12월50일로 넣어주세요.
                        }
                    ]
                },
                {
                    "gisu": "2기",
                    "visible" : 2,
                    "step": [
                        {
                            title:  "지원",
                            period: "상시모집",
                            startDate: "2020-01-01",
                            endDate: "2020-12-31",
                        },
                        {
                            title:  "라피신",
                            period: "2-1기 : 6/29 ~ 7/24",
                            startDate: "2020-06-29",
                            endDate: "2020-07-24",
                        },
                        {
                            title: "라피신",
                            period: "2-2기 : 7/27 ~ 8/24",
                            startDate: "2020-07-27",
                            endDate: "2020-08-24",
                        },
                        {
                            title: "교육",
                            period: "9/01 ~ 최대 2년",
                            startDate: "2020-09-01", 
                            endDate: "2020-12-50",
                        }
                    ]
                },
                {
                    gisu: "3기",
                    visible: 3,
                    step: [
                        {
                            title:  "지원",
                            period: "상시모집",
                            startDate: "2020-01-01",
                            endDate: "2020-12-31",
                        },
                        {
                            title:  "라피신",
                            period: "3-1기 : 8/31 ~ 9/27",
                            startDate: "2020-08-31",
                            endDate: "2020-09-27",
                        },
                        {
                            title: "라피신",
                            period: "3-2기 : 10/05 ~ 11/01",
                            startDate: "2020-10-05",
                            endDate: "2020-11-01",
                        },
                        {
                            title: "교육",
                            period: "11/15 ~ 최대 2년",
                            startDate: "2020-11-15",
                            endDate: "2020-12-50",
                        }
                    ],
                }
            ],
        },{
            "idName" : "ssafy",
            "title" : "SSAFY",
            "gisuData" : [
                {
                    gisu: "4기",
                    visible: 1,
                    step: [
                        {
                            title:  "지원",
                            period: "5/11 ~ 5/25",
                            startDate: "2020-05-11",
                            endDate: "2020-05-25",
                        },
                        {
                            title: "선발",
                            period: "SW적성진단 : 6/06  </br> 현장 인터뷰 : 6/17 ~ 6/19", //최대 2줄 (<br> 한 번만 허용)
                            startDate: "2020-06-06",
                            endDate: "2020-06-19",
                        },
                        {
                            title: "교육",
                            period: "7/07 ~ 1년",
                            startDate: "2020-07-07",
                            endDate: "2020-12-50",
                        }
                    ],
                }
            ]
        },{
            "idName" : "boostcamp",
            "title" : "네이버 부스트캠프",
            "gisuData" : [
                {
                    gisu: "5기",
                    visible: 1,
                    step: [
                        {
                            title:  "지원",
                            period: "6/01 ~ 6/30",
                            startDate: "2020-06-01",
                            endDate: "2020-06-30",
                        },
                        {
                            title: "선발",
                            period: "1차 코딩테스트 : 7/04 <br/> 2차 코딩테스트 : 7/20",
                            startDate: "2020-07-04",
                            endDate: "2020-07-20",
                        },
                        {
                            title: "챌린지",
                            period: "7/27 ~ 8/21",
                            startDate: "2020-07-27",
                            endDate: "2020-08-21",
                        },
                        {
                            title: "교육",
                            period: "01/01 ~ 12/31",
                            startDate: "2020-09-01",
                            endDate: "2020-12-31",
                        }
                    ],
                }
            ]
        },{
            "idName" : "soma",
            "title" : "SW 마에스트로",
            "gisuData" : [
                {
                    gisu: "11기",
                    visible: 1,
                    step: [
                        {
                            title:  "지원",
                            period: "1/22 ~ 2/21",
                            startDate: "2020-01-22",
                            endDate: "2020-02-21",
                        },
                        {
                            title: "선발",
                            period: "1차, 2차 코딩테스트 : 3/14, 4/26 <br/>심층면접 : 5/08~09",
                            startDate: "2020-03-14",
                            endDate: "2020-05-09",
                        },
                        {
                            title: "교육",
                            period: "6/01 ~ 12월",
                            startDate: "2020-06-01",
                            endDate: "2020-12-31",
                        }
                    ],
                }
            ]
        },{
            "idName" : "woowa",
            "title" : "우아한테크코스",
            "gisuData" : [
                {
                    gisu: "3기",
                    visible: 1,
                    step: [
                        {
                            title:  "미정",
                            period: "약 10개월 (2021년 시작예정)",
                            startDate: "2020-01-01",
                            endDate: "2020-12-31",
                        },
                    ],
                }
            ]
        },{
            "idName" : "likelion",
            "title" : "멋쟁이사자처럼",
            "gisuData" : [
                {
                    gisu: "8기",
                    visible: 1,
                    step: [
                        {
                            title:  "지원",
                            period: "3/17 ~ 대학별 상이",
                            startDate: "2020-03-17",
                            endDate: "2020-04-10",
                        },
                        {
                            title: "교육",
                            period: "4월 ~ 10월",
                            startDate: "2020-04-18",
                            endDate: "2020-10-31",
                        },
                    ],
                }
            ]
        },
    ]
    
    return (
        <>
            {ProgramData.map((v, idx) => <GisuList data={v} key={idx} />)}
        </>
    )
}

function GisuList({data}) {
    return (
        <>
            {data.gisuData.map((v, idx) => <StepList data={v} key={idx} title={data.title}/>)}
        </>
    )
}

function StepList({data, title}) {
    return (
        <>  
            {
                (() => {
                    if (data.visible === 1 && title === "42 Seoul") 
                    return (
                        <div className={styles.gantt__row}>
                            <div className={styles.gantt__row__first}>
                                <span>{title + "/n" +data.gisu} </span>
                            </div>
                            <ul className={styles.gantt__row__bars}>
                                {data.step.map((v, idx, id) => <StepListItem data={v} key={idx} id={data.step.length - 1 - idx} />)}
                            </ul>
                        </div>
                    );
                    else if (data.visible === 1) 
                        return (
                            <div className={styles.gantt__row}>
                                <div className={styles.gantt__row__first}>
                                    <span dangerouslySetInnerHTML={{__html: title}}></span>
                                </div>
                                <ul className={styles.gantt__row__bars}>
                                    {data.step.map((v, idx, id) => <StepListItem data={v} key={idx} id={data.step.length - 1 - idx} />)}
                                </ul>
                            </div>
                        );
                    else if (data.visible > 1)
                        return (
                            <div className={styles.gantt__row}>
                                <div className={styles.gantt__row__first}>
                                    <span dangerouslySetInnerHTML={{__html: data.gisu}}></span>
                                </div>
                                <ul className={styles.gantt__row__bars}>
                                    {data.step.map((v, idx, id) => <StepListItem data={v} key={idx} id={data.step.length - 1 - idx} visible={data.visible} />)}
                                </ul>
                            </div>
                        )
                })()
            }
            
        </>
    )
}

function StepListItem({data, id, visible}) {
    let startDate = new Date(data.startDate).setHours(9);
    let endDate = new Date(data.endDate).setHours(9);
    let beginning = new Date('2020-01-01').setHours(9);
    let start = Math.floor((startDate  - beginning) / (1000 * 60 * 60 * 24)) + 1;
    let end = Math.floor((endDate - beginning) / (1000 * 60 * 60 * 24)) + 1;

    let gridColumn = start.toString() + "/" + end.toString();
    let backgroundColor = "#42A7F1";
    if (data.title === "지원")
        backgroundColor = "#4DF0FF";
    else if (data.title === "선발")
        backgroundColor = "#54c6f9";
    else if (data.title === "교육")
        backgroundColor = "#CBDFFD";
    else if (data.title === "미정")
        backgroundColor = "#DAE4F2";

    let	zIndex= id;
	let	oversize_list = (end - start > 61) ? 1 : 0;
    let	next_year = (data.endDate === "2020-12-50") ? 1 : 0;

    return (
        <>
            {
                (() => {
                    if (oversize_list === 0 && next_year === 0) 
                        return (
                            <li className={classNames({[styles.calendar_entry]: true})} style={{ gridColumn: gridColumn, backgroundColor: backgroundColor, zIndex: zIndex}}>
                                <span className={styles.calendar_entry__title}>{data.title}</span>
                                <span className={styles.calendar_entry__date} dangerouslySetInnerHTML={{__html: data.period}}></span>
                            </li>
                        );
                    else if ((oversize_list === 1 || next_year === 0) && visible === 1) 
                        return (
                            <li className={classNames({[styles.calendar_entry]: true, [styles.oversize_list]: true})} style={{ gridColumn: gridColumn, backgroundColor: backgroundColor, zIndex: zIndex}}>
                                <span className={styles.calendar_entry__title}>{data.title}</span>
                                <span className={styles.calendar_entry__date} dangerouslySetInnerHTML={{__html: data.period}}></span>
                            </li>
                        );
                    else if (oversize_list === 1 || next_year === 1) 
                        return (
                            <li className={classNames({[styles.calendar_entry]: true, [styles.oversize_list]: true, [styles.next_year]: true})} style={{ gridColumn: gridColumn, backgroundColor: backgroundColor, zIndex: zIndex}}>
                                <span className={styles.calendar_entry__title}>{data.title}</span>
                                <span className={styles.calendar_entry__date} dangerouslySetInnerHTML={{__html: data.period}}></span>
                            </li>
                        );
                })()
            }
        </>
    )
}

export default function YearlyCalendar() {

	return (
	    <>
            <Header className={styles.webheader}>
                <h1>2020년 부트캠프</h1>
                <p className={styles.websubtitle}>무료 부트캠프 일정을 한 눈에 확인하세요</p>
            </Header>
            <div className={classNames({[styles.wrapper]: true, [styles.landscape_only]: true})}>
                <CTA />
                <div className={styles.gantt}>
                    <YearByWeekLines />
                    <ProgramList />
                </div>
            </div>
        </>
	);
}