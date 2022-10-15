import { useState } from 'react';

import { AiOutlineLike } from 'react-icons/ai';
import { RiEdit2Line } from 'react-icons/ri';

import * as styles from './styles';

import Logo from './assets/logo.svg';

import Avatar1 from './assets/avatar1.png';
import Avatar2 from './assets/avatar2.png';
import Avatar3 from './assets/avatar3.png';

import Post1 from './assets/post1.png';
import Post2 from './assets/post2.png';

import Background from './assets/background.png';

import { theme } from './theme';

function App() {
  const [checked, setChecked] = useState({});
  const [inputValue, setInputValue] = useState({});

  console.log(checked);
  return (
    <>
      <styles.Container>
        <styles.Header>
          <img src={Logo} alt='Logotipo' />
          <styles.HeaderText>Ignite Feed</styles.HeaderText>
        </styles.Header>
        <styles.Main>
          <styles.SideBar>
            <styles.BackgroundImg src={Background} alt='' />
            <styles.HeaderContent>
              <styles.AvatarImg
                src={Avatar1}
                alt=''
                style={{
                  height: '3.8rem',
                  width: '3.8rem',
                  backgroundColor: theme.colors.gray_800,
                }}
              />
              <styles.AvatarName style={{ marginTop: '1rem' }}>
                Leslie Alexander
              </styles.AvatarName>
              <p
                style={{
                  paddingBottom: '1.5rem',
                  borderBottom: `solid 1px ${theme.colors.gray_600}`,
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                UI Designer
              </p>
              <styles.EditButton>
                <RiEdit2Line
                  color={theme.colors.green_500}
                  size={'1.25rem'}
                  style={{ marginRight: '0.6rem' }}
                />
                Editar seu perfil
              </styles.EditButton>
            </styles.HeaderContent>
          </styles.SideBar>
          <div>
            <styles.Section>
              <styles.SectionHeader>
                <styles.AvatarImg src={Post1} alt='' />
                <styles.AvatarInfo>
                  <div>
                    <styles.AvatarName>Jane Cooper</styles.AvatarName>
                    <p>Dev Front-End</p>
                  </div>
                  <p>Públicado há 1h</p>
                </styles.AvatarInfo>
              </styles.SectionHeader>
              <styles.SectionText>
                Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa.
                É um projeto que fiz no NLW Return, evento da Rocketseat. O nome
                do projeto é DoctorCare 🚀 👉
                <styles.SectionLink>jane.design/doctorcare</styles.SectionLink>
                <br />
                <br />{' '}
                <styles.SectionLink>
                  #novoprojeto #nlw #rocketseat
                </styles.SectionLink>
              </styles.SectionText>
              <styles.SectionFeedback>
                <styles.LetYourFeedback>
                  Deixe seu feedback
                </styles.LetYourFeedback>
                <styles.FeedbackInput
                  placeholder='Escreva um comentário...'
                  onChange={e =>
                    setInputValue({ ...inputValue, 0: e.target.value })
                  }
                />
                {inputValue[0] ? (
                  <styles.PublishButton>Publicar</styles.PublishButton>
                ) : (
                  <></>
                )}
              </styles.SectionFeedback>
            </styles.Section>
            <styles.Section>
              <styles.SectionHeader>
                <styles.AvatarImg src={Post2} alt='' />
                <styles.AvatarInfo>
                  <div>
                    <styles.AvatarName>Devon Lane</styles.AvatarName>
                    <p>Dev Front-End</p>
                  </div>
                  <p>Públicado há 2h</p>
                </styles.AvatarInfo>
              </styles.SectionHeader>
              <styles.SectionText>
                Fala pessoal 👋 Finalmente finalizei meu novo site/portfólio.
                Foi um baita desafio criar todo o design e codar na unha, mas
                consegui 💪🏻 <br />
                <br /> Acesse e deixe seu feedback 👉{' '}
                <styles.SectionLink>devonlane.design</styles.SectionLink>
                <br />
                <br />{' '}
                <styles.SectionLink>#uiux #userexperience</styles.SectionLink>
              </styles.SectionText>
              <styles.SectionFeedback>
                <styles.LetYourFeedback>
                  Deixe seu feedback
                </styles.LetYourFeedback>
                <styles.FeedbackInput
                  placeholder='Escreva um comentário...'
                  onChange={e =>
                    setInputValue({ ...inputValue, 1: e.target.value })
                  }
                />
                {inputValue[1] ? (
                  <styles.PublishButton>Publicar</styles.PublishButton>
                ) : (
                  <></>
                )}
                <styles.Posts>
                  <styles.Post>
                    <styles.PostImg src={Avatar1} alt='avatar' />
                    <styles.RightContent>
                      <styles.PostContent>
                        <styles.UserName>
                          Leslie Alexander <styles.You>(você)</styles.You>
                        </styles.UserName>
                        <styles.FeedbackTimeInfo>
                          Cerca de 2h
                        </styles.FeedbackTimeInfo>
                        <styles.PostText>
                          Muito bom Devon, parabéns!! 👏👏
                        </styles.PostText>
                      </styles.PostContent>
                      <styles.Like>
                        <styles.LikeText htmlFor='00'>
                          <AiOutlineLike
                            size={'1.2rem'}
                            color={
                              checked[0]
                                ? theme.colors.green_500
                                : theme.colors.gray_400
                            }
                          />
                          <p
                            style={{
                              marginLeft: '0.4rem',
                              color: checked[0]
                                ? theme.colors.green_500
                                : theme.colors.gray_400,
                            }}
                          >
                            Aplaudir •{' '}
                          </p>
                          <styles.LikeCount
                            style={{
                              color: checked[0]
                                ? theme.colors.green_500
                                : theme.colors.gray_400,
                            }}
                          >
                            {checked[0] ? ' 04' : ' 03'}
                          </styles.LikeCount>
                        </styles.LikeText>
                        <styles.LikeButton
                          type='checkbox'
                          id='00'
                          onChange={e =>
                            setChecked({ ...checked, 0: e.target.checked })
                          }
                        ></styles.LikeButton>
                      </styles.Like>
                    </styles.RightContent>
                  </styles.Post>
                  <styles.Post>
                    <styles.PostImg src={Avatar2} alt='avatar' />
                    <styles.RightContent>
                      <styles.PostContent>
                        <styles.UserName>Jenny Wilson</styles.UserName>
                        <styles.FeedbackTimeInfo>
                          Cerca de 3h
                        </styles.FeedbackTimeInfo>
                        <styles.PostText>
                          Adorei seu novo portifa Devon!
                        </styles.PostText>
                      </styles.PostContent>
                      <styles.Like>
                        <styles.LikeText htmlFor='01'>
                          <AiOutlineLike
                            size={'1.2rem'}
                            color={
                              checked[1]
                                ? theme.colors.green_500
                                : theme.colors.gray_400
                            }
                          />
                          <p
                            style={{
                              marginLeft: '0.4rem',
                              color: checked[1]
                                ? theme.colors.green_500
                                : theme.colors.gray_400,
                            }}
                          >
                            Aplaudir •{' '}
                          </p>
                          <styles.LikeCount
                            style={{
                              color: checked[1]
                                ? theme.colors.green_500
                                : theme.colors.gray_400,
                            }}
                          >
                            {checked[1] ? ' 33' : ' 32'}
                          </styles.LikeCount>
                        </styles.LikeText>
                        <styles.LikeButton
                          id='01'
                          type='checkbox'
                          onChange={e =>
                            setChecked({ ...checked, 1: e.target.checked })
                          }
                        ></styles.LikeButton>
                      </styles.Like>
                    </styles.RightContent>
                  </styles.Post>
                  <styles.Post>
                    <styles.PostImg src={Avatar3} alt='avatar' />
                    <styles.RightContent>
                      <styles.PostContent>
                        <styles.UserName>Bessie Cooper</styles.UserName>
                        <styles.FeedbackTimeInfo>
                          Cerca de 6h
                        </styles.FeedbackTimeInfo>
                        <styles.PostText>💜💜</styles.PostText>
                      </styles.PostContent>
                      <styles.Like>
                        <styles.LikeText htmlFor='02'>
                          <AiOutlineLike
                            size={'1.2rem'}
                            color={
                              checked[2]
                                ? theme.colors.green_500
                                : theme.colors.gray_400
                            }
                          />
                          <p
                            style={{
                              marginLeft: '0.4rem',
                              color: checked[2]
                                ? theme.colors.green_500
                                : theme.colors.gray_400,
                            }}
                          >
                            Aplaudir •{' '}
                          </p>
                          <styles.LikeCount
                            style={{
                              color: checked[2]
                                ? theme.colors.green_500
                                : theme.colors.gray_400,
                            }}
                          >
                            {checked[2] ? ' 04' : ' 03'}
                          </styles.LikeCount>
                        </styles.LikeText>
                        <styles.LikeButton
                          id='02'
                          type='checkbox'
                          onChange={e =>
                            setChecked({ ...checked, 2: e.target.checked })
                          }
                        ></styles.LikeButton>
                      </styles.Like>
                    </styles.RightContent>
                  </styles.Post>
                </styles.Posts>
              </styles.SectionFeedback>
            </styles.Section>
          </div>
        </styles.Main>
      </styles.Container>
    </>
  );
}

export default App;
