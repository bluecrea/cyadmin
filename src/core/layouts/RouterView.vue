<template>
  <div class="scroller">
    <div class="scroller-content">
      <div class="container-inner">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style lang="less">
// 子路由统一样式
@tableBarColor: var(--background-tertiary);
@tableBorderColor: var(--background-secondary-alt);
@textNormal: var(--text-normal);
@headerSecondary: var(--header-secondary);
.headerColor() {
  color: var(--header-primary);
}
.scroller {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  overflow-anchor: none;
  .scroller-content {
    overflow-anchor: none;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-height: 100%;
    justify-content: flex-start;
    .container-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px 16px 0;
    }
  }
  a, button, div, input, label, select, span, strong, textarea {
    outline: 0;
  }
}
.ant-modal-body {
  .ant-form {
    margin: 20px;
    background-color: var(--background-secondary);
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 12px 16px;
    .ing-upload {
      width: 78px;
      height: 68px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .ant-upload {
        width: 78px;
        height: 68px;
        background-color: #36393f;
        border-radius: 6px;
      }
      span.ant-upload {
        color: var(--interactive-normal);
        > div {
          width: 78px;
          height: 68px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          svg {
            fill: white;
            width: 20px;
            height: 20px;
          }
        }
      }
      .ant-upload-list {
        display: none;
        .ant-upload-list-item {
          display: none;
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .ant-input {
      margin-left: 20px;
      width: 320px;
      border-radius: 3px;
      color: @textNormal;
      background-color: var(--deprecated-text-input-bg);
      border: 1px solid var(--deprecated-text-input-border);
    }
  }
  .ant-table-wrapper {
    .ant-table-content {
      .ant-checkbox-inner {
        border-color: @textNormal;
        background-color: transparent;
      }
      .ant-checkbox-disabled .ant-checkbox-inner {
        background-color: @headerSecondary;
        border-color: var(--channels-default) !important;
      }
      .ant-checkbox-checked .ant-checkbox-inner {
        background-color: @primary-color;
        border-color: @primary-color;
      }
    }
    .ant-table-tbody > tr.ant-table-row-selected td {
      background-color: var(--background-modifier-selected);
    }
  }
}
.ant-table-wrapper {
  .ant-table,.ant-table-thead > tr > th {
    background: var(--background-secondary);
    color: @headerSecondary;
    .ant-table-thead > tr > th {
      padding: 8px 10px;
      background: @tableBarColor;
      border-right-color: @tableBorderColor;
      border-bottom-color: @tableBorderColor;
    }
    .ant-table-tbody > tr > td {
      padding: 10px;
      border-bottom-color: @tableBorderColor;
    }
  }
  .ant-table-empty {
    .ant-table-placeholder {
      background: var(--background-secondary);
      border-top-color: @tableBorderColor;
      border-bottom-color: @tableBorderColor;
      .ant-empty {
        .ant-empty-image {
          svg {
            fill: @headerSecondary;
          }
        }
      }

      p {
        color: @headerSecondary;
      }
    }
  }

  .ant-table-bordered .ant-table-thead > tr > th,
  .ant-table-bordered .ant-table-tbody > tr > td {
    border-right-color: @tableBorderColor;
  }
  .ant-table-bordered .ant-table-header > table,
  .ant-table-bordered .ant-table-body > table,
  .ant-table-bordered .ant-table-fixed-left table,
  .ant-table-bordered .ant-table-fixed-right table {
    border-color: @tableBorderColor;
  }
  .ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td,
  .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td,
  .ant-table-thead > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td,
  .ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td {
    background-color: var(--background-modifier-selected);
  }

  .ant-pagination-item {
    border-color: var(--background-tertiary);
    background: var(--background-accent);
  }
  .ant-pagination-item-active {
    background-color: @tableBorderColor;
    border-color: transparent;
  }
  .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination-next .ant-pagination-item-link {
    border-color: var(--background-tertiary);
    background-color: var(--channeltextarea-background);
  }
  .ant-pagination-disabled a,
  .ant-pagination-disabled:hover a,
  .ant-pagination-disabled:focus a,
  .ant-pagination-disabled .ant-pagination-item-link,
  .ant-pagination-disabled:hover .ant-pagination-item-link,
  .ant-pagination-disabled:focus .ant-pagination-item-link {
    border-color: @tableBorderColor;
  }

}
.editable-row-operations a {
  margin-right: 8px;
}

.page {
  width: 768px;
  min-height: 500px;
  .ant-form {
    h5 {
      font-weight: 600;
      text-transform: uppercase;
      color: @headerSecondary;
      margin-bottom: 8px;
      font-size: 14px;
      line-height: 25px;
    }
    &.page-form-group {
      .form-item {
        margin-bottom: 20px;
        input {
          &.ant-input {
            font-size: 16px;
            border-radius: 3px;
            color: @textNormal;
            background-color: var(--deprecated-text-input-bg);
            border: 1px solid var(--deprecated-text-input-border);
            transition: border-color .2s ease-in-out;
          }
          .ant-input-lg {
            padding: 10px;
          }
        }

        button {
          cursor: pointer;
          &.ant-btn {
            height: 32px;
            min-width: 60px;
            min-height: 32px;
            padding: 2px 16px;
            &.ant-btn-primary {
              border: none;
              background-color: @primary-color;
            }
          }
        }
        .flex-upload {
          display: flex;
          height: 124px;
          .ant-upload-picture-card-wrapper {
            width: 124px;
            box-sizing: border-box;
            .ant-upload {
              color: var(--interactive-normal);
              &.ant-upload-select-picture-card {
                padding:0;
                margin: 0;
                width: 124px;
                height: 124px;
                border: none;
                cursor: pointer;
                background-color: var(--background-secondary-alt);
              }
              .anticon-picture {
                svg {
                  width: 26px;
                  height: 26px;
                }
              }
            }
          }
        }
        .ant-select {
          width: 100%;
          .ant-select-selector {
            background-color: var(--background-secondary);
            border-color: var(--background-tertiary);
            color: @textNormal;
            font-weight: 500;
            font-size: 14px;
          }
          .ant-select-selection-placeholder {
            color: rgba(255, 255, 255, .3);
          }

        }
        .divider {
          margin-bottom: 10px;
          width: 100%;
          height: 1px;
          border-top: thin solid var(--background-modifier-accent);
        }
        .direction-row {
          flex: 1 1 auto;
          display: flex;
          flex-direction: row;
          align-items: stretch;
          justify-content: flex-start;
          flex-wrap: nowrap;
          box-sizing: border-box;
          h5 {
            margin-top: 0;
            margin-bottom: 0;
            font-size: 12px;
            line-height: 16px;
            color: @headerSecondary;
          }
        }
        .invite-row {
          display: flex;
          flex: 1 1 auto;
          height: 62px;
          position: relative;
          font-size: 16px;
          line-height: 20px;
          color: @textNormal;
          box-shadow: 0 1px 0 0 hsl(0deg 0% 100% / 4%);
          box-sizing: border-box;
          flex-direction: row;
          justify-content: flex-start;
          align-items: stretch;
          &:before {
            content: "";
            position: absolute;
            top: 0;
            right: -20px;
            bottom: -1px;
            left: -20px;
            border-radius: 5px;
            border: 1px solid transparent;
            opacity: 0;
            -webkit-transition: opacity .1s ease;
            transition: opacity .1s ease;
          }
          .horizontal {
            margin-right: 10px;
            margin-left: 10px;
            z-index: 2;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            box-sizing: border-box;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: center;
            display: flex;
            font-size: 13px;
            .headerColor();
            input.ant-input {
              font-size: 12px;
              &:focus {
                box-shadow: none;
              }
            }
            .ing-flex {
              display: flex;
              align-items: center;
              .ing-name {
                margin-left: 8px;
              }
            }
            button {
              &.ant-btn-circle {
                min-width: 24px;
                width: 24px;
                height: 24px;
                padding: 0;
                background-color: var(--background-secondary);
                color: var(--interactive-normal);
                border: none;
                cursor: pointer;
              }
              &.ant-switch {
                cursor: pointer;
                background-color: hsl(218, 4.6%, 46.9%);
                border: none;
                position: relative;
                width: 40px;
                height: 24px;
                padding: 0;
              }
            }
            .ant-switch:after {
              top: 2px;
              left: 3px;
              width: 20px;
              height: 20px;
              box-shadow: none;
            }
            .ant-switch-checked {
              background-color: hsl(139,  47.3%, 43.9%);
              &:after {
                left: 98%;
              }
            }
          }
          .remove-ing {
            position: absolute;
            top: -12px;
            right: -12px;
            opacity: 0;
            transition: opacity .1s ease;
            z-index: 2;
            text-indent: -9999em;
            overflow: hidden;
            cursor: pointer;
            width: 24px;
            height: 24px;
            background-position: 50% 50%;
            background-repeat: no-repeat;
            border-radius: 50%;
            background-image: url('../../assets/images/close.svg');
          }
          &:hover {
            .remove-ing {
              opacity: 1;
            }
          }
        }
        .ant-collapse {
          margin-bottom: 16px;
          border-radius: 5px;
          border: 1px solid var(--background-secondary-alt);
          background: var(--deprecated-card-editable-bg);
          > .ant-collapse-item {
            border-bottom: 0;
            &:last-child {
              &,& > .ant-collapse-header {
                border-bottom: 0;
              }
            }
            &.ant-collapse-item-active {
              border-bottom: 1px solid var(--background-secondary-alt);
              &:last-child {
                border-bottom: 0;
              }
              .ant-collapse-header {
                border-bottom: none;
              }
            }
            > .ant-collapse-header {
              .headerColor();
              border-bottom: 1px solid var(--background-secondary-alt);
            }
          }
          .ant-collapse-content {
            padding: 0 16px 24px;
            background: none;
            border-width: 0;
            .headerColor();
            .ant-collapse-content-box {
              padding: 0;
            }
          }
          .divider {
            width: 100%;
            height: 1px;
            border-top: thin solid var(--background-modifier-accent);
            margin-bottom: 24px;
          }
          .step-flex() {
            display: flex;
            justify-content: flex-start;
            align-items: stretch;
            flex-wrap: nowrap;
          }
          .step-view {
            .step-flex();
            flex-direction: row;
            flex: 1 1 auto;
            .flex-upload {
              margin-right: 10px;
            }
            .step-txt {
              flex: 1 1 auto;
              margin-left: 10px;
              .step-flex();
              flex-direction: column;
              textarea {
                resize: none;
                &.ant-input {
                  color: var(--text-normal);
                  background-color: var(--deprecated-text-input-bg);
                  border: 1px solid var(--deprecated-text-input-border);
                }
              }
            }
          }
        }
        .card-step {
          border-color: var(--background-secondary-alt);
          padding: 0;
          margin-bottom: 16px;
          background: var(--deprecated-card-editable-bg);
          border: 1px solid;
          border-radius: 5px;
          .flex-vertical {
            flex: 1 1 auto;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: stretch;
            display: flex;
          }
        }
      }
    }
    .ant-select {
      &:not(.ant-select-customize-input) {
        .ant-select-selector {
          color: var(--channels-default);
          background-color: var(--channeltextarea-background);
          border-color: var(--channels-default);
        }
      }
      .ant-select-selector {
        height: 40px;
      }
    }
    .ant-select-multiple .ant-select-selection-item {
      color: var(--interactive-active);
      background-color: var(--background-tertiary);
      border: 1px solid transparent;
      svg {
        fill: var(--interactive-normal);
      }
    }
    .ant-select-arrow {
      top: 50%;
      color: var(--interactive-normal);
    }
    .ant-btn {
      color: var(--channels-default);
      background-color: var(--channeltextarea-background);
      &.ant-btn-primary {
        color: white;
      }
    }
    .ant-input-textarea {
      margin-left: 16px;
      flex-grow: 1;
      background-color: var(--background-secondary);
      border: 1px solid var(--background-secondary-alt);
      border-radius: 4px;
      textarea {
        color: @headerSecondary;
        resize: none;
        font-size: 16px;
        padding: .5em;
        &.ant-input {
          height: 90px;
          border: none;
        }
        &:hover,&:focus {
          border: none;
          box-shadow: none;
        }
      }
      &.ant-input-textarea-show-count::after {
        line-height: 30px;
        color: @headerSecondary;
        border-top: 1px solid var(--background-secondary-alt);
        padding-right: 10px;
      }
    }
  }
}
.page-table {
  width: 100%;
  .ant-btn {
    cursor: pointer;
    &.editable-add-btn {
      cursor: pointer;
      padding: 5px 16px;
      color: var(--interactive-normal);
      background-color: var(--channeltextarea-background);
    }
    &:focus,&:active,&:hover {
      color: var(--interactive-hover);
    }
  }
}
</style>