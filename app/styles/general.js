// import '../assets/sass/materialize.scss';
import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';
import media from './media';

const general = `
  html,
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    height: 100%;
    width: 100%;
    line-height: 1.5;
    font-size: 14px;
    overflow-x: hidden;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body .tooltip-container {
    padding: 8px;
    border-radius: 10px;
    margin-top: 20px;
    background-color: #000000;
    color: #ffffff;
    z-index: 100;
  }

  a {
    text-decoration-line: none;
    color: unset !important;
    cursor: pointer;
    &:hover {
      background-color: ${colors.$dark_01};
    }
    &.active {
      background-color: ${colors.$bluegrey.base};
    }
  }

  ul, li {
    list-style-type: none;
  }

  .pointer {
    cursor: pointer;
  }

  .mobile {
    display: none !important;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  textarea:focus, input:focus{
    outline: none;
  }

  span {
    &.red {
      color: red;
    }
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;

    .menu-expanded {
      #menu {
        width: 166px;
        transition: width 0.5s;
        .menu-item-link {
          .menu-title {
            transition: width 0.5s;
            &.active {
              transition-delay: 0s;
            }
          }
        }
      }
      #container {
        padding-left: 165px;
        transition: all 0.5s ease-in-out;
      }
    }

    .menu-collapsed {
      #menu {
        width: 47px;
        transition: width 0.5s;
        padding: 0px;
        .menu-item-link {
          justify-content: center;
          .menu-title {
            display: none;
          }
        }
      }
      #container {
        padding-left: 47px;
        transition: all 0.3s ease-in-out;
      }
    }

    .sidebar-expanded {
      #header {
        .option-item-menu {
          .active {
            .marker {
              visibility: visible;
            }
          }
        }
      }
      #sidebar {
        display: block;
      }
    }

    .modal {
      &-expanded {
        #modal {
          display: flex;
          background-color: rgba(0,0,0,.32);
        }
      }
      &-collapsed {
        #modal {
          display: none;
        }
      }
    }
  }
`;

export default createGlobalStyle`${general + media}`;
