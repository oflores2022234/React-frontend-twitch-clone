/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  validateUsername,
  validateUsernameMessage,
  validateAvatarUrl,
  avatarUrlValidationMessage,
  validateDescription,
  descriptionValidationMessage,
  validateTitle,
  validateTitleMessage,
} from "../../shared/validators";
import { Input } from "../Input.jsx";

const inputs = [
  {
    field: "username",
    label: "Username",
    validationMessage: validateUsernameMessage,
    type: "text",
  },
  {
    field: "title",
    label: "Title",
    validationMessage: validateTitleMessage,
    type: "text",
  },
  {
    field: "avatarUrl",
    label: "AvatarUrl",
    validationMessage: avatarUrlValidationMessage,
    type: "text",
  },
  {
    field: "description",
    label: "Description",
    validationMessage: descriptionValidationMessage,
    type: "text",
  },
];
export const ChannelSettings = ({ settings }) => {
  const [formState, setFormState] = useState({
    title: {
      isValid: validateTitle(settings.title),
      showError: false,
      value: settings.title,
    },
    username: {
      isValid: validateUsername(settings.username),
      showError: false,
      value: settings.username,
    },
    avatarUrl: {
      isValid: validateAvatarUrl(settings.avatarUrl),
      showError: false,
      value: settings.avatarUrl,
    },
    description: {
      isValid: validateDescription(settings.description),
      showError: false,
      value: settings.description,
    },
  });

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case "username":
        isValid = validateUsername(value);
        break;
      case "title":
        isValid = validateTitle(value);
        break;
      case "avatarUrl":
        isValid = validateAvatarUrl(value);
        break;
      case "description":
        isValid = validateDescription(value);
        break;
      default:
        break;
    }
    setFormState((prevState) => ({
        ...prevState,
        [field]:{
            ...prevState[field],
            isValid,
            showError: !isValid
        }
    }))
  };

  return(
    <form className="settings-form">
        {inputs.map((input) => (
            <Input 
                key={input.field}
                field={input.field}
                label={input.label}
                value={formState[input.field].value}
                onChangeHandler={handleInputValueChange}
                onBlurHandler={handleInputValidationOnBlur}
                showErrorMessage={formState[input.field].showError}
                validationMessage={input.validationMessage}
                type={input.type}
                textarea={input.textarea}
            />
        ))}
        <button>
            Guardar
        </button>
    </form>
  )
};
