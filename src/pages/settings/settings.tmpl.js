import { elementsMultiplier } from "../../utils/elementsMultiplier";
import { basicButton } from "../../components/buttons/buttonBasic";

const template = `
<div class="settings">
    <div class="settings-heading">
        <div class="avatar-rounded">
            <img src="{{ avatar }}" alt="">
        </div>
        <h2 class="center-text">{{ nameHeading }}</h2>
    </div>
    <div class="settings-table">
        <div class="table-row">
            <span class="setting-name">{{ email_label }}</span>
            <span data-editable class="setting-value">{{ email }}</span>
        </div>
        <div class="table-row">
            <span class="setting-name">{{ login_label }}</span>
            <span data-editable class="setting-value">{{ login }}</span>
        </div>
        <div class="table-row">
            <span class="setting-name">{{ first_name_label }}</span>
            <span data-editable class="setting-value">{{ first_name }}</span>
        </div>
        <div class="table-row">
            <span class="setting-name">{{ second_name_label }}</span>
            <span data-editable class="setting-value">{{ second_name }}</span>
        </div>
        <div class="table-row">
            <span class="setting-name">{{ nickname_label }}</span>
            <span data-editable class="setting-value">{{ nickname }}</span>
        </div>
        <div class="table-row">
            <span class="setting-name">{{ phone_label }}</span>
            <span data-editable class="setting-value">{{ phone }}</span>
        </div>
        <div>
            <label for="file">Choose avatar to upload</label>
            <input type="file" id="file" name="file">
        </div>
    </div>
    <div class="action-buttons">
    ${elementsMultiplier(
      basicButton(),
      { options: ["primary", "warning", "danger"] },
      "{{ primaryButtonName }}",
      "{{ warningButtonName }}",
      "{{ dangerButtonName }}"
    )}

    </div>
   
</div>
`;
export default template;
