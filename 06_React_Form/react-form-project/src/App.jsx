import "./App.css";
import { useForm } from "react-hook-form";
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    //API call ko simulatekrte h
    await new Promise((resolve) => setTimeout(resolve, 5000));

    console.log("Submmiting data.....");
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="FirstName">First Name : </label>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className={errors.FirstName ? "input-error" : ""}
            {...register("FirstName", {
              required: true,
              minLength: { value: 3, message: "Requied atleast 3 charachter" },
              maxLength: { value: 10, message: "Required atmost 10 character" },
            })}
          />
          {errors.FirstName && (
            <p className="error-msg">{errors.FirstName.message}</p>
          )}
        </div>
        <br />
        <div>
          <label htmlFor="MiddleName">Middle Name : </label>
          {/* include validation with required or other standard HTML validation rules */}
          <input
            className={errors.MiddleName ? "input-error" : ""}
            {...register("MiddleName", {
              required: true,
              minLength: { value: 3, message: "Requied atleast 3 charachter" },
              maxLength: { value: 10, message: "Required atmost 10 character" },
            })}
            type="text"
          />

          {/* errors will return when field validation fails  */}
          {errors.MiddleName && (
            <p className="error-msg">{errors.MiddleName.message}</p>
          )}
        </div>
        <br />
        <div>
          <label htmlFor="LastName">Last Name : </label>
          <input
            className={errors.LastName ? "input-error" : ""}
            {...register("LastName", {
              required: true,
              minLength: { value: 3, message: "Requied atleast 3 charachter" },
              maxLength: { value: 10, message: "Required atmost 10 character" },
            })}
          />
          {errors.LastName && (
            <p className="error-msg">{errors.LastName.message}</p>
          )}
        </div>
        <div>
          <input
            type="submit"
            disabled={isSubmitting}
            value={isSubmitting     ? "submmiting" : "submit"}
          />
        </div>
      </form>
    </>
  );
}

export default App;
