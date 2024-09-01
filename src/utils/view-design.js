import Vue from "vue";
import { Button, Icon, TabPane, Tabs } from "view-design";
import { Form, FormItem, Input, Divider } from "view-design";
import { Message } from "view-design";

Vue.component("Button", Button);
Vue.component("Form", Form);
Vue.component("FormItem", FormItem);
Vue.component("Input", Input);
Vue.component("Divider", Divider);
Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);
Vue.component(Icon.name, Icon);

Vue.prototype.$Message = Message;
