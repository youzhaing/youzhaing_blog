import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "日常闲谈",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        生活充满了美好的瞬间，我的博客致力于捕捉这些瞬间并与您分享。无论是一次难忘的旅行、一份美味的食物、或是家庭中的温馨时刻，我们都将记录下来并通过文字、图片和视频与您互动。通过这些故事，我们希望能够激发您对生活的热爱，让您更加珍惜每一刻。
      </>
    ),
  },
  {
    title: "学习笔记",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        除了记录生活，我还深入研究数据并进行分析。数据是了解世界的强大工具，它可以帮助我们发现趋势、洞察问题并找到解决方案。我们将分享关于各种主题的数据分析，包括社会趋势、科技创新、环境问题等等。通过这些数据分析，我们希望能够为您提供更深入的见解，让您更好地理解世界。
      </>
    ),
  },
  {
    title: "欢迎反馈",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        我的博客网站欢迎您的互动和反馈。您可以在文章下面留下评论，与其他读者交流，也可以通过电子邮件或社交媒体与我们联系。您的反馈对我们非常重要，它将帮助我们不断改进和提供更好的内容。
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
