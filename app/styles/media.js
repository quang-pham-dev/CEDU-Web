import colors from './colors';

export const withMobile = styles => {
  return styles;
};

const media = `
    @media all and (max-width: 600px) {
        .web {
            display: none;
        }
        .mobile {
            display: flex !important;
        }
        #header {
            flex-direction: column;
            #global-search {
                width: 100%;
            }
            .option-item-menu {
                width: 100%;
                .option-item .icon {
                    width: 25px;
                }
            }
            .header-cell {
              width: 100%;
              &:nth-child(2) {
                position: fixed;
                bottom: 0;
                border-top: 1px solid silver;
                z-index: 2;
              }
            }
        }

        #container {
            padding-left: 0px !important;
            .container-view {
                div[class*="ViewHeader-"] {
                        a {
                        width: 25%;
                        padding: 5px;
                        &:nth-child(4) {
                            border-right: 0px;
                        }
                    }
                }
                &-body {}
            }
            .container-view-body {
                padding-bottom: 135px;
            }
        }

        .menu-collapsed {
            #menu {
                opacity: 0;
                z-index: 0;
            }
        }

        .menu-expanded {
            #menu {
                z-index: 3;
            }
        }

        .sidebar-expanded {
            #sidebar {
              width: 100%;
              height: 100%;
              background-color: ${colors.$white}
              .sidebar-menu-settings {
                display: flex;
                flex-direction: column;
                align-items: center;
              }
            }
        }

        #modal {
            .modal {
                min-width: 100%;
                height: 100%;
                border-radius: 0px;
            }
        }
    }
`;

export default media;
