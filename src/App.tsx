import { useState } from "react";
import { fetchData } from "./api/api.projects";
import "./App.css";
import LoadingSpinner from "./components/Spinner";

function App() {
  const [searchData, setSearchData] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  


  const fetch = async (id: number) => {
    try {
        setIsLoading(true)
      const res = await fetchData(id);
      setSearchData(res.Search);
      setIsShow(true);
      console.log(res, "1");
      setIsLoading(false)

    } catch (err) {
      console.error(err);
    }
  };

  const PopOver = ({ data, isShow }: { data: Array<any>; isShow: boolean }) => {
    return (
      <div className="relative">
        {isShow &&(
          <div className="popover">
            <div className="popover-body">

            {data.map((item: any, index: number) => (
              <div key={index} className="card">
                    <img src={item.Poster} alt="" />
                    <div className="type-badge"><span>{item.Type}</span></div>
                    <h3>{item.Title} / {item.Year}</h3>
              </div>
            ))}
            </div>
            <div className="popover-bottom container">
                <div className="btn"> <a onClick={() => setIsShow(false)}>Close</a></div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="btn">
        <a onClick={() => fetch(1)}>Fetch 1</a>
      </div>
      <div className="btn">
        <a onClick={() => fetch(2)}>Fetch 2</a>
      </div>
      <div className="btn">
        <a onClick={() => fetch(3)}>Fetch 3</a>
      </div>
      <PopOver data={searchData} isShow={isShow} />
      {
        isLoading && <LoadingSpinner />
      }
    </div>
  );
}

export default App;
