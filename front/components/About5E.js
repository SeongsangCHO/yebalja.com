import styles from './About5E.module.css';
import React from "react";
import classNames from 'classnames';
import Head from 'next/head';

export default function About5E() {
  return (
    <>
      <Head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"/>
      </Head>
        <section className={styles.section}>
            <div class="container">
                <div class="row">
                    <div className={classNames({[styles.flex_center]: true, [styles.sm_no_flex]: true})}>
                        <div class="col-md-8">
                            <div className={classNames({[styles.pull_right]: true, [styles.sm_no_float]: true})}>
                                <ul className={styles.team_members}>
                                    <li class="clearfix">
                                        <div className={styles.member_details}>
                                            <div>
                                                <img alt="image" src="https://user-images.githubusercontent.com/37580034/88367073-cd9b9b80-cdc5-11ea-8056-b522189f858d.png"/>
                                                <div className={styles.member_info}>
                                                    <h3>조성상/secho</h3>
                                                    <p>back</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className={styles.member_details}>
                                            <div>
                                                <img src="http://gocheckers.com/images/roster/josh_wesley_headshot_1718.png" alt="UI Designer"/>
                                                <div className={styles.member_info}>
                                                    <h3>이대현/daelee</h3>
                                                    <p>front</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className={styles.member_details}>
                                            <div>
                                                <img src="https://axis.org/wp-content/uploads/2014/10/chris-headshot.png" alt="UI Designer"/>
                                                <div className={styles.member_info}>
                                                    <h3>김미혜/mihtkim</h3>
                                                    <p>front</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <div className={styles.member_details}>
                                            <div>
                                                <img src="https://axis.org/wp-content/uploads/2015/05/evan-headshot.png" alt="UI Designer"/>
                                                <div className={styles.member_info}>
                                                    <h3>홍정아/jehong</h3>
                                                    <p>front</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className={styles.member_details}>
                                            <div>
                                                <img src="http://gocheckers.com/images/roster/andrew_poturalski_headshot_1718.png" alt="UI Designer"/>
                                                <div className={styles.member_info}>
                                                    <h3>이태혁/taelee</h3>
                                                    <p>CEO</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div className={classNames({[styles.pull_left]: true, [styles.sm_text_center]: true})}>
                                <div className={styles.team_overview}>
                                    <h2>Who Are We?</h2>
                                    <a href="#">그들의 개발 히스토리</a>
                                    <p><div>솔직히 저희도 이렇게 잘 될줄 몰랐어요</div></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);
}