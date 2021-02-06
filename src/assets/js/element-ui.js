/**
 * @format
 */

import Vue from 'vue';
import {
  Form,
  FormItem,
  Button,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Select,
  Option,
  Row,
  Col,
  Pagination,
  Message,
  MessageBox,
  Loading,
  Tooltip,
  Table,
  TableColumn,
  Breadcrumb,
  BreadcrumbItem
} from 'element-ui';
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Select);
Vue.use(Option);
Vue.use(Row);
Vue.use(Col);
Vue.use(Pagination);
Vue.use(Loading);
Vue.use(Tooltip);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);

// Vue.use(Pagination);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
