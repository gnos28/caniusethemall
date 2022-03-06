import React from "react";
import caniuseData1 from "./data/data-1.0.json";
import UsageBar from "./UsageBar";

function cssFindWords(rawCSS) {
  let words = [];
  let word = "";

  rawCSS = rawCSS.replaceAll("\n", "");

  let spreadRawCss = [...rawCSS];

  spreadRawCss.forEach((car) => {
    if (
      car !== "{" &&
      car !== "}" &&
      car !== ";" &&
      car !== "," &&
      car !== "(" &&
      car !== ")" &&
      car !== ":" &&
      car !== " "
    )
      word += car;
    else {
      if (word.length > 0) {
        if (
          !word.includes("1") &&
          !word.includes("2") &&
          !word.includes("3") &&
          !word.includes("4") &&
          !word.includes("5") &&
          !word.includes("6") &&
          !word.includes("7") &&
          !word.includes("8") &&
          !word.includes("9") &&
          !word.includes("0") &&
          !word.includes(".") &&
          !word.includes("#")
        )
          words.push(word);
      }
      word = "";
    }
  });
  if (word.length > 0) words.push(word);

  let uniqueWords = [...new Set(words)];

  return uniqueWords;
}

class Result extends React.PureComponent {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  getResult = () => {
    this.data = this.props.data;

    let words = cssFindWords(this.data);

    let canIuseResults = [];

    Object.entries(caniuseData1.data).forEach((cssObject) => {
      if (words.includes(cssObject[0])) {
        canIuseResults.push({
          word: cssObject[0] + " / " + cssObject[1].title,
          usage: cssObject[1].usage_perc_y+cssObject[1].usage_perc_a,
          object: cssObject[1],
        });
      } else
        cssObject[1].keywords.split(",").forEach((keyword) => {
          if (words.includes(keyword))
            canIuseResults.push({
              word: keyword + " / " + cssObject[1].title,
              usage: cssObject[1].usage_perc_y+cssObject[1].usage_perc_a,
              object: cssObject[1],
            });
        });
    });

    canIuseResults.sort((a, b) => {
      return a.usage - b.usage;
    });
    
    return canIuseResults;
  }

  render() {

    const update = () => this.getResult();

    return <div className="form-control">{this.getResult().map((item, index) => <UsageBar key={'usageBar_'+index} name={item.word} usage={item.usage}/>)}</div>;
  }
}

export default Result;
