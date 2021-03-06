import React from "react";
import styled from "styled-components";
import { ModalHeader, ModalBody, Form } from "reactstrap";
import { Modal, FormGroup } from "../common";
import AvatarEditor from "react-avatar-editor";
import Dropzone from "react-dropzone";
import classNames from "classnames";
import Slider from "@material-ui/core/Slider";
import addfile from "../../assets/images/add-file.svg";
import avatar from "../../assets/images/avatar-picture.svg";
import CheckIcon from "@material-ui/icons/Check";

const StyledModal = styled(Modal)`
  && {
    @media only screen and (min-width: 1400px) {
      margin: 5% auto;
    }
    max-width: 780px;
    width: 100%;
    margin: 0 auto;
    top: 0;
    transform: none;
    padding: 15px;
    .modal-header {
      background: rgba(20, 30, 98, 0.03);
      position: relative;
      border-bottom: 2px solid rgba(3, 9, 48, 0.15);
      height: 107px;
      &__text {
        position: absolute;
        text-align: center;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        p {
          font-size: 21px;
          color: #08135a;
          font-weight: 400;
          margin-bottom: 0;
        }
      }
      .close {
        opacity: 1;
        span {
          color: #6254e8;
          font-size: 45px;
          font-weight: 400;
        }
      }
    }
    .modal-body {
      text-align: center;
      padding: 30px 20px;
      form {
        max-width: 630px;
        margin: 0 auto;
        .form-group {
          margin-bottom: 2%;
        }

        .checkbox {
          display: block;
          position: relative;
          padding-left: 30px;
          cursor: pointer;
          user-select: none;
          text-align: left;
          font-weight: 600;
          .form-group {
            input {
              position: absolute;
              opacity: 0;
              cursor: pointer;
              height: 0;
              width: 0;
              &:checked ~ .checkmark:after {
                display: block;
              }
              &:checked ~ .checkmark {
                background: #54c052;
                border: none;
              }
            }
            .checkmark {
              position: absolute;
              left: calc(50% - 45px);
              left: 0;
              top: 0;
              height: 20px;
              width: 20px;
              background-color: #fff;
              border: 1px solid rgba(0, 0, 0, 0.5);
              border-radius: 100%;
              &:after {
                content: "";
                position: absolute;
                display: none;
                border: 2px solid #fff;
                border-radius: 100%;
                top: 3px;
                left: 3px;
                width: 14px;
                height: 14px;
              }
            }
          }
        }
        button {
          border-radius: 40px;
          height: 40px;
          width: 50%;
          border: none;
          font-size: 12px;
          transition: 0.3s ease;
          color: #fff;
          margin: 5px 15px;
          max-width: 100px;
          &:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 8px 0 #2d20a7;
          }
          &[disabled] {
            pointer-events: none;
          }
          &.button-back {
            background: #ffffff;
            color: #6254e8;
            border: 1px solid #6254e8;
          }
          &.button-update {
            background: #6254e8;
            &[disabled] {
              background: #595959;
            }
          }
        }
      }
    }
    .avatar-icon {
      margin-bottom: 50px;
      display: flex;
      flex-flow: wrap;
      .avatar-icon__item {
        position: relative;
        .--bg {
          position: absolute;
          background: rgba(8, 19, 90, 0.4);
          width: calc(100% - 10px);
          height: calc(100% - 10px);
          border-radius: 100%;
          top: 5px;
          left: 5px;
          display: none;
          z-index: 99999;
        }
        img {
          margin: 5px;
          transition: 0.3s ease;
          cursor: pointer;
          &:hover {
            transform: scale(1.1);
          }
        }
        svg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #ffffff;
          font-size: 27px;
          display: none;
          z-index: 99999;
        }
      }
      .--tick {
        img {
          transform: scale(1.1);
        }
        svg,
        .--bg {
          display: block;
        }
      }
    }
    @media only screen and (max-width: 500px) {
      .modal-header__text p {
        font-size: 17px;
      }
    }
    @media only screen and (max-width: 365px) {
      .modal-body {
        padding: 20px 15px;
        form {
          .checkbox {
            font-size: 12px;
          }
          .form__text {
            h3,
            p {
              font-size: 14px;
            }
          }
        }
      }
    }
    @media only screen and (max-width: 1400px) {
      margin: 5% auto;
    }
  }
  .photo {
    margin-bottom: 25px;
    position: relative;
    background: #f2f4fd;
    border: 1px dashed #b5beec;
    border-radius: 4px;
    padding: 20px 10px;
    width: 60%;
    h3 {
      font-size: 12px;
      font-weight: 600;
    }
    p {
      margin: 5px;
    }
    canvas {
      width: 240px !important;
      height: 240px !important;
    }
    .input_file {
      margin: 0 auto;
      display: block !important;
      position: absolute;
      left: 50%;
      bottom: 57px;
      transform: translateX(-61%);
      opacity: 0;
      cursor: pointer;
      height: 50px;
    }
    .support-file {
      font-size: 10px;
      color: #b5beec;
      font-weight: 400;
      line-height: 14px;
    }
    #find {
      padding: 3px 6px 3px 27px;
      line-height: 34px;
      font-weight: 500;
      background: #6254e8;
      max-width: 134px;
      width: 134px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      &: hover {
        transform: none;
        box-shadow: none;
      }
      span {
        padding: 9px 9px;
        border-radius: 100%;
        margin-left: 9px;
        background: #3e32b6;
        display: inline-flex;
        img {
          height: 12px;
        }
      }
    }
    .zoom {
      display: flex;
      width: 240px;
      margin: 0 auto;
      p {
        margin: 3px 12px 3px 0;
        font-weight: 400;
      }
    }
    @media only screen and (max-width: 560px) {
      width: 100%;
    }
    @media only screen and (max-width: 400px) {
      canvas {
        width: 210px !important;
        height: 210px !important;
      }
      .zoom {
        width: 210px;
      }
    }
    @media only screen and (max-width: 370px) {
      .zoom {
        width: 80%;
      }
    }
  }
  .--border_bottom {
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    span {
      width: calc(50% - 10px);
      background: #dce0f6;
      height: 2px;
    }
    p {
      margin: 0 10px;
      font-size: 16px;
      font-weight: bold;
    }
  }
`;

const ModalUpdatePicture = ({
  isOpen,
  handleToggle,
  handleSubmit,
  isSubmitting,
  avatarImage,
  dataSticker,
}) => {
  const [scale, setScale] = React.useState(1);
  const [form, setForm] = React.useState({
    checkbox: "UPLOAD_PICTURE",
    image: avatarImage || avatar,
    name: "default_avatar.jpg",
  });
  const [nameSticker, setNameSticker] = React.useState("");

  React.useEffect(() => {
    if (avatarImage) setForm({ ...form, image: avatarImage });
    // eslint-disable-next-line
  }, [avatarImage]);

  const imageRef = React.useRef(null);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    let avatar = {};
    let isUploadPicture = false;
    if (form.checkbox === "UPLOAD_PICTURE") {
      isUploadPicture = true;
      avatar = {
        name: form.name,
        data: imageRef.current.getImageScaledToCanvas().toDataURL(),
      };
    } else if (form.checkbox === "CHOOSE_AN_AVATAR") {
      avatar.sticker = nameSticker;
    }

    const formData = {
      avatar,
    };
    handleSubmit(formData, isUploadPicture);
  };

  const handleCheckbok = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleDrop = (dropped) => {
    setForm({
      ...form,
      image: dropped[0],
      name: dropped[0].name,
      checkbox: "UPLOAD_PICTURE",
    });
  };

  const handleChangeScale = (e, value) => {
    setScale(value);
  };
  const handleOnclick = (event) => {
    setNameSticker(event.target.name);
    setForm({ ...form, checkbox: "CHOOSE_AN_AVATAR" });
  };

  return (
    <StyledModal
      isOpen={isOpen}
      toggle={handleToggle}
      wrapClassName="wrap-modalDashboard"
      id="modal-update-picture"
    >
      <ModalHeader toggle={handleToggle}>
        <div className="modal-header__text">
          <p>Update profile picture</p>
        </div>
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmitForm}>
          <label className="checkbox">
            Upload picture
            <FormGroup
              propsInput={{
                type: "radio",
                name: "checkbox",
                onChange: handleCheckbok,
                checked: form.checkbox === "UPLOAD_PICTURE",
                value: "UPLOAD_PICTURE",
              }}
              type="checkbox"
            />
          </label>
          <div className="photo">
            <h3>Drag and drop files here</h3>
            <Dropzone
              onDrop={handleDrop}
              noClick
              noKeyboard
              style={{ width: "300px", height: "300px" }}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <AvatarEditor
                    ref={imageRef}
                    width={300}
                    height={300}
                    image={form.image}
                    scale={scale}
                    crossOrigin="anonymous"
                  />
                  <div className="zoom">
                    <p>Zoom:</p>
                    <Slider
                      value={scale}
                      onChange={handleChangeScale}
                      aria-labelledby="range-slider"
                      min={1}
                      max={2}
                      step={0.01}
                    />
                  </div>
                  <p>OR</p>
                  <button id="find">
                    Add a file
                    <span>
                      <img src={addfile} alt="addfile" />
                    </span>
                  </button>
                  <input {...getInputProps()} className="input_file" />
                  <div className="support-file">
                    Supported files <br />
                    .png, .jpg, .svg
                  </div>
                </div>
              )}
            </Dropzone>
          </div>
          <div className="--border_bottom">
            <span className="border_left"></span>
            <p>OR</p>
            <span className="border-right"></span>
          </div>
          <label className="checkbox">
            Choose an avatar
            <FormGroup
              propsInput={{
                type: "radio",
                name: "checkbox",
                onChange: handleCheckbok,
                value: "CHOOSE_AN_AVATAR",
                checked: form.checkbox === "CHOOSE_AN_AVATAR",
              }}
              type="checkbox"
            />
          </label>
          <div className="avatar-icon">
            {dataSticker.stickers &&
              dataSticker.stickers.length &&
              dataSticker.stickers.map((item, index) => (
                <div
                  key={`${index}`}
                  className={classNames("avatar-icon__item", {
                    "--tick": nameSticker === item.sticker,
                  })}
                >
                  <div className="--bg"></div>
                  <img
                    src={item.url}
                    alt={item.sticker}
                    name={item.sticker}
                    onClick={handleOnclick}
                  />
                  <CheckIcon />
                </div>
              ))}
          </div>
          <div>
            <button
              className="button-back fw-500"
              disabled={isSubmitting}
              onClick={handleToggle}
            >
              Back
            </button>
            <button disabled={isSubmitting} className="button-update fw-500">
              Update
            </button>
          </div>
        </Form>
      </ModalBody>
    </StyledModal>
  );
};

export default ModalUpdatePicture;
