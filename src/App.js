import React from "react";
import "./App.css";
import { ACTIONS, reducer, initialState } from "./reducer";

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div className="App">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const { firstName, lastName, emailAddress, phoneNumber } = state;
          alert(
            `
                Hello ${firstName} ${lastName}!\r\n
                Since you signed up, we will email you at ${emailAddress} or call you at ${phoneNumber}.\r\n
                Thanks!
              `
          );
        }}
      >
        <div className="field">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            required
            onChange={(e) =>
              dispatch({
                type: ACTIONS.SET_FIRST_NAME,
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            required
            onChange={(e) =>
              dispatch({
                type: ACTIONS.SET_LAST_NAME,
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className="field">
          <label>Email Address</label>
          <input
            type="email"
            name="emailAddress"
            required
            onChange={(e) =>
              dispatch({
                type: ACTIONS.SET_EMAIL_ADDRESS,
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className="field">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            required
            pattern="\d{10}"
            onChange={(e) =>
              dispatch({
                type: ACTIONS.SET_PHONE_NUMBER,
                payload: e.target.value,
              })
            }
          />
        </div>
        <div>
          <div className="controls-container">
            <button type="submit">Sign Me Up!</button>
            <button
              type="reset"
              onClick={() =>
                dispatch({
                  type: ACTIONS.RESET_FORM,
                })
              }
            >
              Start Over
            </button>
            {state.formIsDirty && (
              <span
                style={{ marginLeft: "15px", color: "red", fontWeight: 900 }}
              >
                The form is dirty
              </span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
