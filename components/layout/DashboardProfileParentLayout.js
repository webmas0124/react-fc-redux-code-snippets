import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Edit, UserEdit, Key, Info } from "../common/icons";
import { UncontrolledTooltip } from "reactstrap";
import avataPicture from "../../assets/images/avatar-picture.svg";
import { getStudentProfile } from "../../redux/actions/student";

const StyledDashboardProfileLayout = styled.section`
  margin-bottom: auto;
  .teachers__card__footer {
    display: none;
  }
  .DashboardProfileLayout__inner {
    display: flex;
    justify-content: space-between;
    > div {
      box-shadow: 0px 5px 25px rgba(98, 84, 232, 0.203944);
      border-radius: 4px;
    }
    .card {
      height: 100%;
      width: 30%;
      margin: 16px 15px 16px 10px;
      padding: 20px;
      display: flex;
      align-items: center;
      border: none;
      .avatar {
        width: fit-content;
        border-radius: 100%;
        position: relative;
        cursor: pointer;
        overflow: hidden;
        img {
          width: 180px;
          height: 180px;
        }
        .--bg {
          position: absolute;
          background: rgba(8, 19, 90, 0.8);
          width: 100%;
          height: 100%;
          top: 0;
          border-radius: 100%;
          transition: 0.3s ease;
          opacity: 0;
        }
        &:hover .--bg {
          opacity: 1;
        }
        .avatar__update {
          position: absolute;
          top: 40%;
          left: 33%;
          font-size: 16px;
          color: #ffffff;
          display: none;
        }
        &:hover .avatar__update {
          display: block;
        }
      }
      h4 {
        margin: 7px 0;
        text-transform: capitalize;
      }
      .location {
        font-size: 14px;
        color: #b5beec;
        text-transform: capitalize;
      }
    }
    .profile-userInfo {
      width: 68%;
      height: 100%;
      background: #ffffff;
      overflow: hidden;
      margin: 16px 10px;
      padding: 40px 0px 20px;
      font-size: 14px;
      @media only screen and (max-width: 1020px) {
        width: calc(100% - 32px);
        max-width: 900px;
        margin: 30px auto;
      }
      @media only screen and (max-width: 480px) {
        width: 100%;
      }
    }

    @media only screen and (max-width: 1020px) {
      display: block;
      & > div:first-child {
        height: 100%;
        width: 100%;
        max-width: 450px;
        margin: 20px auto;
      }
    }
    .menu {
      color: #b5beec;
      border-bottom: 2px solid #dce0f6;
      &__inner {
        display: flex;
        padding: 0 30px;
        > a {
          margin-right: 40px;
        }
        @media only screen and (max-width: 370px) {
          > a {
            margin-right: 20px;
          }
        }
      }
      &__userInfo {
        transition: 0.3s ease;
        cursor: pointer;
        color: #b5beec;
        &:hover,
        &.--active {
          color: #6254e8;
          p {
            border-bottom: 2px solid #6254e8;
          }
        }
        p {
          border-bottom: 2px solid transparent;
          margin: 0;
          padding-bottom: 13px;
          transform: translateY(2px);
        }

        svg {
          font-size: 22px;
          margin-bottom: 10px;
          display: none;
        }
        @media only screen and (max-width: 745px) {
          svg {
            display: initial;
          }
          .menu__icon {
            padding: 6px 15px 0px;
          }
          p {
            display: none;
          }
        }
      }
    }
  }
`;

function DashboardProfileParentLayout({
  children,
  onOpenModalUpdateAvatar,
  userInfo,
}) {
  const storeStudents = useSelector((store) => store.student.students);

  React.useEffect(() => {
    if (!storeStudents.success && !storeStudents.loading) {
      getStudentProfile();
    }
  }, [storeStudents]);

  return (
    <StyledDashboardProfileLayout>
      <div className="container">
        <div className="DashboardProfileLayout__inner">
          <div className="card">
            <div className="avatar" onClick={onOpenModalUpdateAvatar}>
              <img src={userInfo.avatar || avataPicture} alt="avatar" />
              <div className="--bg"></div>
              <div className="avatar__update">
                <Edit />
                <p>Update</p>
              </div>
            </div>
            <h4>{`${userInfo.first_name} ${userInfo.last_name}`}</h4>
            {/* <p className="location">
              {userInfo.address && userInfo.address[2]}
            </p> */}
          </div>
          <div className="profile-userInfo">
            <div className="menu">
              <div className="menu__inner">
                <NavLink
                  className="menu__userInfo"
                  activeClassName="--active"
                  to="/dashboard/parent/profile"
                  exact
                >
                  <p>General information</p>

                  <div className="menu__icon" id="UncontrolledTooltip1">
                    <UserEdit />
                  </div>
                  <UncontrolledTooltip
                    placement="top"
                    target="UncontrolledTooltip1"
                  >
                    General information
                  </UncontrolledTooltip>
                </NavLink>
                <NavLink
                  className="menu__userInfo"
                  activeClassName="--active"
                  to="/dashboard/parent/profile/password"
                  exact
                >
                  <p>Password</p>
                  <div className="menu__icon" id="UncontrolledTooltip2">
                    <Key />
                  </div>
                  <UncontrolledTooltip
                    placement="top"
                    target="UncontrolledTooltip2"
                  >
                    Password
                  </UncontrolledTooltip>
                </NavLink>
                {storeStudents && storeStudents.data.length ? (
                  <NavLink
                    className="menu__userInfo"
                    activeClassName="--active"
                    to="/dashboard/parent/profile/users"
                    exact
                  >
                    <p>Family members</p>
                    <div className="menu__icon" id="UncontrolledTooltip3">
                      <Info />
                    </div>
                    <UncontrolledTooltip
                      placement="top"
                      target="UncontrolledTooltip3"
                    >
                      Family members
                    </UncontrolledTooltip>
                  </NavLink>
                ) : (
                  ""
                )}
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </StyledDashboardProfileLayout>
  );
}

export default DashboardProfileParentLayout;
