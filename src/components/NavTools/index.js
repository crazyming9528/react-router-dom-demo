import React from 'react';
import style from './NavTools.module.scss';

export default class NavTools extends React.Component {


    render() {
        const {title, description, link} = this.props;
        return (<div className={style.NavTools}>
            <h3 className={style.title}>{title}</h3>
            <div className={style.desc}>
              <div className={style.content}>
                  {description}
                  {link ? <div className={style.link}>
                      <a href={link} target='_blank'>查看笔记</a>
                  </div> : null}
              </div>
            </div>

        </div>)
    }


}
