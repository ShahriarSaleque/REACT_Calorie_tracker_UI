import React, { useState } from "react";

const MainComponent = () => {
  //States
  const [meal, setMeal] = useState("");
  const [calorie, setCalorie] = useState(0);

  //Handle events
  const onSubmit = e => {
    e.preventDefault();
    console.log(meal, calorie);
    setMeal("");
    setCalorie(0);
  };

  const onChange = e => {
    if (e.target.name == "Meal") {
      setMeal(e.target.value);
    } else {
      setCalorie(e.target.value);
    }
  };

  return (
    <div className="container my-3 ml-2 ">
      <h1 className="lead">Dashboard</h1>
      {/* Form tags */}
      <form className="mt-4" onSubmit={onSubmit}>
        <div className="form-group row">
          <label htmlFor="meal" className="col-sm-2 col-form-label">
            Meal :
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="Meal"
              value={meal}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="calorie" className="col-sm-2 col-form-label">
            Calories :
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              name="Calorie"
              value={calorie}
              onChange={onChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default MainComponent;
