const getInfo = async () => {
  try {
    const res = await axios.get("https://api.cdnjs.com/libraries?limit=20");
    console.log(res.data.results);
    return res.data.results;
  } catch (error) {
    return [];
    console.log(error);
  }
};

const setInfo = async () => {
  const data = await getInfo();

  console.log(data);

  data.map((item) => {
    const main = document.querySelector("main");
    main.style.backgroundColor = "#454647";
    const containerInMain = createElement("div", "container", "", main);
    const rowInMain = createElement("div", "row", "", containerInMain);
    const col6 = createElement("div", "col--6 col-12", "", rowInMain);
    const col6second = createElement("div", "col-xl-6 col-12", "", rowInMain);
    const rowcol6 = createElement("div", "row", "", col6);
    const col10 = createElement("div", "col-10 offset-1 my-2", "", rowcol6);
    const rowcol6sec = createElement("div", "row", "", col6second);
    const col10sec = createElement(
      "div",
      "col-10 offset-1 my-2",
      "",
      rowcol6sec
    );
    const freeDiv = createElement(
      "div",
      "d-flex justify-content-between",
      "",
      col10
    );
    const linkDiv = createElement(
      "div",
      "d-flex align-items-center my-4",
      "",
      col10
    );
    const link = createElement("p", "text-warning fs-5", "", linkDiv);
    link.innerHTML = item.latest;
    const p = createElement("p", "fs-2 fw-normal text-danger", "", freeDiv);
    p.innerHTML = item.name;

    p.addEventListener("click", (e) => {
      e.preventDefault();
      renderMy();
    });
    function renderMy() {
      const pnew = createElement(
        "p",
        "fw-normal text-danger fs-2",
        "",
        containerInMain
      );
      p.innerHTML = item.name;
      containerInMain.innerHTML = "";
    }
    const icon = createElement(
      "i",
      `far fa-save my-2 text-danger`,
      "",
      freeDiv
    );

    icon.addEventListener("click", function () {
      navigator.clipboard.writeText("123");
    });

    icon.style.fontSize = "24px";
  });
};
setInfo();
