import React from 'react';
import textData from '../Static/staticText.json'

const SomeStatistics = () => {
    const Counter = () => {
        const [count, setCount] = React.useState(0);
        let counterTimeout;
    
        const counter = (minimum, maximum) => {
          let i = minimum;
          const timeout = () => {
            setCount(i);
            i++;
            if (i <= maximum) {
              counterTimeout = setTimeout(timeout, 3);
            }
          };
          timeout();
        };
    
        React.useEffect(() => {
          counter(1900, 1995);
          return () => {
            clearTimeout(counterTimeout);
          };
        }, []);
    
        return (
          <div>
            <h1 id="stats-number" style={{color:'#0a2351'}} >{count}</h1>
          </div>
        );
      };
      const CounterStudents = () => {
        const [count, setCount] = React.useState(0);
        let counterTimeout;
    
        const counter = (minimum, maximum) => {
          let i = minimum;
          const timeout = () => {
            setCount(i);
            i++;
            if (i <= maximum) {
              counterTimeout = setTimeout(timeout, 3000);
            }
          };
          timeout();
        };
    
        React.useEffect(() => {
          counter(4990, 5000);
          return () => {
            clearTimeout(counterTimeout);
          };
        }, []);
    
        return (
          <div>
            <h1 id="stats-number" style={{color:'#0a2351'}} >{count}+</h1>
          </div>
        );
      };
      const CounterMarks = () => {
        const [count, setCount] = React.useState(750);
        let counterTimeout;
    
        const counter = (minimum, maximum) => {
          let i = minimum;
          const timeout = () => {
            setCount(i);
            i++;
            if (i <= maximum) {
              counterTimeout = setTimeout(timeout, 10);
            }
          };
          timeout();
        };
    
        React.useEffect(() => {
          counter(750, 1000);
          return () => {
            clearTimeout(counterTimeout);
          };
        }, []);
    
        return (
          <div>
             <h1 id="stats-number" style={{color:'#0a2351'}} >{count}+</h1>
          </div>
        );
      };
    const CounterPercentage = () => {
        const [count, setCount] = React.useState(90);
        let counterTimeout;
    
        const counter = (minimum, maximum) => {
          let i = minimum;
          const timeout = () => {
            setCount(i);
            i++;
            if (i <= maximum) {
              counterTimeout = setTimeout(timeout, 10);
            }
          };
          timeout();
        };
    
        React.useEffect(() => {
          counter(0, 90);
          return () => {
            clearTimeout(counterTimeout);
          };
        }, []);
    
        return (
          <div>
            <h1 id="stats-number" style={{color:'#0a2351'}} >{count}%</h1>
          </div>
        );
      };
  
    return (
      <div id="parent" >
          <h3 style={{color:'#002D62'}} > {textData.Statistics.name} </h3>
          <br/><br/>
        <section className="scorestats">
          <div id="divcounter">
            <h4 style={{ marginTop: "7%", color: "#808080" }}>
              {" "}
              {textData.Statistics.paras[0][0]}{" "}
            </h4>
  
            <Counter />
            <h5 style={{ color: "#a9a9a9" }}>
              {" "}
              {textData.Statistics.paras[0][1]}{" "}
            </h5>
          </div>
          <div id="divcounter">
            <h4 style={{ marginTop: "7%", color: "#808080" }}>
              {" "}
              {textData.Statistics.paras[1][0]}{" "}
            </h4>
            <CounterStudents />
            <h5 style={{ color: "#a9a9a9" }}>
              {" "}
              {textData.Statistics.paras[1][1]}{" "}
            </h5>
          </div>
          <div id="divcounter">
            <h4 style={{ marginTop: "7%", color: "#808080" }}>
              {" "}
              {textData.Statistics.paras[2][0]}{" "}
            </h4>
            <CounterMarks />
            <h5 style={{ color: "#a9a9a9" }}>
              {" "}
              {textData.Statistics.paras[2][1]}{" "}
            </h5>
          </div>
          <div id="divcounter">
            <h4 style={{ marginTop: "7%", color: "#808080" }}>
              {" "}
              {textData.Statistics.paras[3][0]}{" "}
            </h4>
            <CounterPercentage />
            <h5 style={{ color: "#a9a9a9" }}>
              {" "}
              {textData.Statistics.paras[3][1]}{" "}
            </h5>
          </div>
        </section>
      </div>
    );
  };

const DataTablePage = () => {
    return(
        <div>
           
            <SomeStatistics />
            
        </div>
    )
}

export default DataTablePage