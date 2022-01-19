import React, { useState, useEffect } from "react";

//
const url = "https://api.github.com/users";

const FecthingOne = () => {
  const [users, setUsers] = useState([]);

  const fetchFunction = async () => {
    const response = await fetch(url);
    const users = await response.json();
    //
    // With the  .slice (from 0 to 8 products),
    // i want to show just 12 products starting from the 0 position
    setUsers(users.slice(0, 9));
    console.log(users);
  };

  useEffect(() => {
    fetchFunction();
  }, []);

  return (
    <>
      <section id="fetching-container">
        <h1>Fetching</h1>
        <div className="wrapper">
          <ul className="card-container-fetch">
            {users.map((user) => {
              const { id, login, avatar_url, html_url } = user;
              return (
                <li key={id} className="card-item-fetch">
                  <h2>{login}</h2>
                  <div
                    className="img-box-fetch"
                    style={{
                      width: "200px",
                      height: "200px",
                      backgroundRepeat: "no-repeat",
                      backgroundImage: `url(${avatar_url})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      border: "10px solid #1a1a1a",
                    }}
                  >
                    {/* <img src={avatar_url} alt="" /> */}
                  </div>

                  <a
                    href={html_url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="link-url"
                  >
                    profile
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <br></br>
    </>
  );
};

export default FecthingOne;
