import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./AddRecords.module.scss";
import image from "../../assets/img/tesodev-search-logo.png";
import arrow from "../../assets/img/back-arrow.png";
import Button from "../../components/utils/Buttons/Button/Button";
import AlertBox from "../../components/AlertBox/AlertBox";
import { useRecords } from "../../context";
function AddRecords() {
  const { records, dispatch } = useRecords();
  let navigate = useNavigate();
  console.log(records);

  const [formInputs, setFormInputs] = useState({
    nameSurname: "",
    country: "",
    city: "",
    email: "",
  });
  const [errorState, setErrorState] = useState({
    nameSurname: false,
    country: false,
    city: false,
    email: false,
  });
  const [disable, setDisable] = useState(false);

  const [sendStatus, setSendStatus] = useState(true);

  const navigateSearchResult = (e) => {
    e.preventDefault();
    navigate("../search-results");
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (handleErrors()) {
      setSendStatus(false);
    } else {
      setSendStatus(true);
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);
      dispatch({
        type: "ADD_RECORDS",
        value: [
          formInputs.nameSurname,
          `${formInputs.nameSurname} Corporation`,
          formInputs.email,
          `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`,
          formInputs.country,
          formInputs.city,
        ],
      });
    }
    console.log(e);
  };
  useEffect(() => {
    setDisable(handleDisable());
    setErrorState({
      ...errorState,
      nameSurname: /^[a-zA-Z]{2,60}$/.test(formInputs.nameSurname),
      country: /^[a-zA-Z]{2,40}$/.test(formInputs.country),
      city: /^[a-zA-Z]{2,40}$/.test(formInputs.city),
      email: /^[\w-\.]{1,64}@([\w-]+\.)+[\w-]{2,4}$/.test(formInputs.email),
    });
    setSendStatus(true);
  }, [formInputs]);

  const handleDisable = () => {
    return Object.values(formInputs).some((e) => e == "");
  };
  const handleErrors = () => {
    return Object.values(errorState).some((e) => e != true);
  };
  return (
    <div className={style.page}>
      <div className={style.topContainer}>
        <img src={image} alt="tesodev" />
        <div onClick={navigateSearchResult} className={style.returnLink}>
          <img src={arrow} alt="arrow-left" />
          <div className={style.returnText}>Return to List Page</div>
        </div>
      </div>
      <div className={style.formBox}>
        <form action="">
          <div>
            <label
              className={`${
                !sendStatus && !errorState.nameSurname && style.errorInput
              }`}
              htmlFor="name-surname"
            >
              Name Surname
            </label>
            <input
              onChange={(e) =>
                setFormInputs({ ...formInputs, nameSurname: e.target.value })
              }
              className={`${style.formInput} ${
                !sendStatus && !errorState.nameSurname && style.errorInput
              }`}
              id="name-surname"
              type="text"
              placeholder="Enter name and surname"
              value={formInputs.nameSurname}
              required
            />
            {!sendStatus && !errorState.nameSurname && (
              <p className={`${style.errorInput}`}>Error</p>
            )}
          </div>
          <div>
            <label
              className={`${
                !sendStatus && !errorState.country && style.errorInput
              }`}
              htmlFor="country"
            >
              Country
            </label>
            <input
              onChange={(e) =>
                setFormInputs({ ...formInputs, country: e.target.value })
              }
              className={`${style.formInput} ${
                !sendStatus && !errorState.country && style.errorInput
              }`}
              id="country"
              type="text"
              placeholder="Enter a country"
              value={formInputs.country}
              required
            />
            {!sendStatus && !errorState.country && (
              <p className={`${style.errorInput}`}>Error</p>
            )}
          </div>
          <div>
            <label
              className={`${
                !sendStatus && !errorState.city && style.errorInput
              }`}
              htmlFor="city"
            >
              City
            </label>
            <input
              onChange={(e) =>
                setFormInputs({ ...formInputs, city: e.target.value })
              }
              className={`${style.formInput} ${
                !sendStatus && !errorState.city && style.errorInput
              }`}
              id="city"
              type="text"
              placeholder="Enter a city"
              value={formInputs.city}
              required
            />
            {!sendStatus && !errorState.city && (
              <p className={`${style.errorInput}`}>Error</p>
            )}
          </div>
          <div>
            <label
              className={`${
                !sendStatus && !errorState.email && style.errorInput
              }`}
              htmlFor="email"
            >
              Email
            </label>
            <input
              onChange={(e) =>
                setFormInputs({ ...formInputs, email: e.target.value })
              }
              className={`${style.formInput} ${
                !sendStatus && !errorState.email && style.errorInput
              }`}
              id="email"
              type="text"
              placeholder="Enter an e-mail (abc@xyz.com)"
              value={formInputs.email}
              required
            />
            {!sendStatus && !errorState.email && (
              <p className={`${style.errorInput}`}>Error</p>
            )}
          </div>
          <div className={style.buttonContainer}>
            <Button
              disabled={disable}
              buttonName={"Add"}
              type={"submit"}
              onClick={submitForm}
            />
          </div>
        </form>
        <div
          className={`${style.alertBox} ${sendStatus && style.displayAlertBox}`}
        >
          {Object.keys(errorState).map((each, index) => (
            <AlertBox errorStatus={errorState} alert={each} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AddRecords;
