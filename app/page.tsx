"use client";
import { useState } from "react";
import styles from "./page.module.scss";

export default function Home() {
  const [sayings, setSayings] = useState({
    author: "毛泽东",
    content: "不要陷于狭隘的经验论。"
  });
  const linkList = [
    {
      name: "首页",
      url: "https://isxlei.fun/"
    },
    {
      name: "博客",
      url: "https://blog.isxlei.fun/"
    },
    {
      name: "监控",
      url: "https://status.isxlei.fun/"
    }
  ];
  const iconLink = [
    {
      name: "GitHub",
      url: "https://github.com/Xleihai",
      icon: "iconfont icon-github"
    },
    {
      name: "Email",
      url: "mailto:isxlei@foxmail.com",
      icon: "iconfont icon-email"
    }
  ];
  const getSayings = async () => {
    const res = await fetch("https://v1.hitokoto.cn/?c=d");
    const data = await res.json();
    console.log(data);
    setSayings({
      author: data.from_who,
      content: data.hitokoto
    });
  };
  // getSayings();
  return (
    <div className={styles.page}>
      <div className={styles.masked}></div>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.content_inner}>
            <div className={styles.avatar}>
              <img src="/imger/avatar.jpg" alt="avatar" />
            </div>
            <p className={styles.name}>星泪不流泪</p>
            <p className={styles.title}>沉淀过往，扎根当下，奔赴未来</p>
            <div className={styles.hr} />
            <p className={styles.sayings}>{sayings.content}</p>
            <p className={styles.sayings}>「{sayings.author}」</p>
            <div className={styles.link_box}>
              {linkList.map(item => (
                <a href={item.url} target="_blank" className={styles.link} key={item.name}>
                  {item.name}
                </a>
              ))}
            </div>
            <div className={styles.icon_box_link}>
              {iconLink.map(item => (
                <a href={item.url} target="_blank" className={styles.icon_link} key={item.name}>
                  <span className={item.icon}></span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          {new Date().getFullYear()} &copy;&nbsp;
          <a target="_blank" href="https://beian.miit.gov.cn">
            粤ICP备2025385276号
          </a>
        </footer>
      </main>
    </div>
  );
}
