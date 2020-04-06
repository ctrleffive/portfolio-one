/** @jsx jsx */

import { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Global, css, jsx } from '@emotion/core'

import * as variables from '../styles/variables.json'

import * as person from '../../data/person.json'
import * as social from '../../data/social.json'
import * as skills from '../../data/skills.json'
import * as experience from '../../data/experience.json'
import * as education from '../../data/education.json'

const InfoSection = ({ title, children }) => (
  <div>
    <div>{title}</div>
    <div>{children}</div>
  </div>
)

const ListItem = ({ icon, title, skill, children }) =>
  skill ? (
    <div>{children}</div>
  ) : (
    <div>
      <div>{title || icon}</div>
      <div>{children}</div>
    </div>
  )

export default class ResumePage extends Component {
  render = () => {
    return (
      <div>
        <Global
          styles={css`
            body,
            html {
              font-family: ${variables.default.font}, sans-serif;
              font-size: 16px;
            }
          `}
        />
        <Helmet
          base="/"
          defaultTitle={'Resume of ' + person.name.first}
          meta={[
            {
              name: 'robots',
              content: 'noindex',
            },
          ]}>
          <html lang="en" />
        </Helmet>
        <div className="container">
          <header>
            <div className="name">
              <strong>{person.name.first}</strong> {person.name.last}
            </div>
            <div className="position">{person.position}</div>
          </header>
          <div className="row">
            <div className="col-md-3">
              <InfoSection title="Contact">
                <ListItem title="Location">{person.location}</ListItem>
                <ListItem title="Phone">{person.phone}</ListItem>
                <ListItem title="Email">{person.email}</ListItem>
                <ListItem title="Website">{person.website}</ListItem>
              </InfoSection>
              <InfoSection title="Social">
                {social.map(item => {
                  const usernameSplits = item.url.split('/')
                  const username = usernameSplits[usernameSplits.length - 1]
                  return (
                    <ListItem icon={`images/icons/${item.icon}.png`}>
                      {`${item.service} @${username}`}
                    </ListItem>
                  )
                })}
              </InfoSection>
              <InfoSection title="Skills">
                {skills.map(item => (
                  <ListItem skill>{item}</ListItem>
                ))}
              </InfoSection>
              <InfoSection title="Education">
                {education.map(item => (
                  <ListItem title={item.degree}>
                    <div>{item.duration}</div>
                    <div>{item.institute}</div>
                  </ListItem>
                ))}
              </InfoSection>
            </div>
            <div className="col-md-9">
              <InfoSection title="Professional Profile">
                {person.proProfile}
              </InfoSection>
              <InfoSection title="Employment History">
                {experience.map(item => (
                  <div>
                    <div>
                      {item.company} | {item.position}
                    </div>
                    <div>{item.location}</div>
                    <div>{item.duration}</div>
                    <div>
                      {item.description.map(desc => (
                        <p>{desc}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </InfoSection>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
