import Vue from "vue";
import { Button } from "view-design";
import { Form, FormItem, Input, Divider } from "view-design";
import { Message } from "view-design";

Vue.component("Button", Button);
Vue.component("Form", Form);
Vue.component("FormItem", FormItem);
Vue.component("Input", Input);
Vue.component("Divider", Divider);
Vue.prototype.$Message = Message;
