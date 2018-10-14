import React from "react";
import { connect } from "react-redux";

import { Button, Modal, Form, Input, Cascader } from 'antd';
import { actionCreators } from "../../store";
import "./index.scss";

const FormItem = Form.Item;
const classOptions = [
  {
    value: '编程',
    label: '编程',
    children: [
      {
        value: 'JavaScript',
        label: 'JavaScript',
      },
      {
        value: 'CSS',
        label: 'CSS',
      },
      {
        value: 'HTML',
        label: 'HTML',
      },
      {
        value: 'React全家桶',
        label: 'React全家桶',
      },
      {
        value: '小程序',
        label: '小程序',
      },
      {
        value: 'Webpack',
        label: 'Webpack',
      },
      {
        value: 'nodejs',
        label: 'nodejs',
      },
      {
        value: 'linux',
        label: 'linux',
      },
      {
        value: '规范解读',
        label: '规范解读',
      },
    ],
  },
  {
    value: '其他',
    label: '其他',
  }];
const CollectionCreateForm = Form.create(
  {//Form.create(options)
    // onFieldsChange(props, changedFields) {
    //   props.onChange(changedFields);
    // },
    mapPropsToFields(props) {
      return {
        articleName: Form.createFormField(
          {
            value: props.title,
          }
        ),
      };
    },
  }
)(
  class extends React.Component {//经过Form.create包装过的组件。
    render() {
      const { visible, onCancel, onCreate, form, modelOkText } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal visible={visible} title="很快就可以发布了……" okText={modelOkText} cancelText='取消' onCancel={onCancel} onOk={onCreate} >

          <Form layout="vertical">
            <FormItem label="标题">
              {
                getFieldDecorator('articleName', {
                  rules: [{ required: true, message: '请输入40字以内的标题！' }],
                })(<Input maxLength={40} />)
              }
            </FormItem>

            <FormItem label='分类'>
              {
                getFieldDecorator('class', {
                  rules: [{ required: true, message: '请选择分类~' }],
                })(<Cascader options={classOptions} placeholder="请选择分类" />)
              }
            </FormItem>

            <FormItem label="描述">
              {
                getFieldDecorator('description', {
                  rules: [{ required: true, message: '请输入140字以内的描述！' }],
                })(<Input.TextArea maxLength={140} placeholder='请输入140字以内的描述' />)
              }
            </FormItem>
          </Form>

        </Modal>
      );
    }
  }
);

class PublishPop extends React.Component {
  handleCreate = () => {
    const form = this.formRef.props.form;
    const { currentArticleId, handlePublish } = this.props;
    handlePublish(form, currentArticleId);
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  render() {
    const { articlesData, currentArticleId, pubPanelShow, handleCancel, handleFieldsChange, modelOkText } = this.props;
    const article = articlesData.find((article) => article.articleId === currentArticleId);
    let title = article ? article.articleName : '';
    return (
      <CollectionCreateForm
        wrappedComponentRef={this.saveFormRef}
        visible={pubPanelShow}
        onCancel={handleCancel}
        onCreate={this.handleCreate}
        onChange={handleFieldsChange}
        title={title.slice(0, 40)}
        modelOkText={modelOkText}
      />
    );
  }
}

const mapState = (state) => ({
  pubPanelShow: state.getIn(['write', 'pubPanelShow']),
  currentArticleId: state.getIn(['write', 'currentArticleId']),
  modelOkText: state.getIn(['write', 'modelOkText']),
});
const mapDispatch = (dispatch) => ({
  handleCancel() {
    dispatch(actionCreators.changeStatus('pubPanelShow', false));
  },
  handleFieldsChange(changedFields) {
    console.log(changedFields);
  },
  handlePublish(form, articleId) {
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      const obj = { ...values, articleId }
      dispatch(actionCreators.publishAsyncAC(obj));
      form.resetFields();
    });
  }
});

export default connect(mapState, mapDispatch)(PublishPop);