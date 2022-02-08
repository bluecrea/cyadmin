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
// 子路由统一样式
@tableBarColor: var(--background-tertiary);
@tableBorderColor: var(--background-secondary-alt);
.editable-row-operations a {
  margin-right: 8px;
}
.page {
  width: 768px;
  min-height: 500px;
  .ant-form {
    &.page-form-group {
      .form-item {
        margin-bottom: 20px;
        h5 {
          font-weight: 600;
          text-transform: uppercase;
          color: var(--header-secondary);
          margin-bottom: 8px;
          font-size: 14px;
          line-height: 25px;
        }
        input {
          &.ant-input {
            font-size: 16px;
            border-radius: 3px;
            color: var(--text-normal);
            background-color: var(--deprecated-text-input-bg);
            border: 1px solid var(--deprecated-text-input-border);
            transition: border-color .2s ease-in-out;
          }
          .ant-input-lg {
            padding: 10px;
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
          .ant-input-textarea {
            margin-left: 16px;
            flex-grow: 1;
            background-color: var(--background-secondary);
            border: 1px solid var(--background-secondary-alt);
            border-radius: 4px;
            textarea {
              color: var(--header-secondary);
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
              color: var(--header-secondary);
              border-top: 1px solid var(--background-secondary-alt);
              padding-right: 10px;
            }
          }
        }

        .ant-select {
          width: 100%;
          .ant-select-selector {
            background-color: var(--background-secondary);
            border-color: var(--background-tertiary);
            color: var(--text-normal);
            font-weight: 500;
            font-size: 14px;
          }
          .ant-select-selection-placeholder {
            color: rgba(255, 255, 255, .3);
          }

        }
      }
    }




    .ant-form-item-label > label {
      color: var(--channels-default);
    }
    .ant-btn {
      color: var(--channels-default);
      background-color: var(--channeltextarea-background);
      &.ant-btn-primary {
        color: white;
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

  /*.avatar-uploader > .ant-upload {
    width: 220px;
    height: 118px;
    background-color: transparent;
    svg {
      fill: var(--interactive-normal);
    }
    img {
      font-size: 0;
      width: 204px;
      height: 100px;
    }
  }
  .ant-upload-select-picture-card i {
    color: var(--channels-default);
    font-size: 32px;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    color: var(--channels-default);
    margin-top: 8px;
  }*/


  .fm-zy,.tag-cate, .setup, .ingredient {
    color: var(--channels-default);
    h3, dt {
      color: var(--interactive-hover);
      padding: 30px 0 10px 0;
      font-size: 16px;
    }
    .detail {
      display: flex;
      justify-content: space-evenly;
    }
    .in-box {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
      .ant-select {
        margin-right: 10px;
      }
      .ant-input.ant-input-sm {
        height: 40px;
        width: 65%;
        margin-right: 15px;
      }
      .ant-checkbox-wrapper {
        color: var(--channels-default);
      }
    }
  }
  button {
    border: 1px dashed var(--channels-default);
  }
  .setup {
    .ant-upload.ant-upload-select-picture-card {
      background-color: transparent;

    }
    dd {
      display: flex;
      .ant-input-textarea {
        width: 75%;
      }
      .remove {
        height: 130px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 5%;
      }
    }
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
      color: var(--text-normal);
      background-color: var(--deprecated-text-input-bg);
      border: 1px solid var(--deprecated-text-input-border);
    }
  }
}
.page-table {
  width: 100%;
  .ant-table-wrapper {
    .ant-table,.ant-table-thead > tr > th {
      background: var(--background-secondary);
      color: var(--header-secondary);
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
              fill: var(--header-secondary);
            }
          }
        }

        p {
          color: var(--header-secondary);
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