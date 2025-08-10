"use client";
// WebApi.js
import React, { useState } from "react";
import { useSpeachSynthesisApi } from "./useSpeachSynthesisApi";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function WebApi() {
  const {
    text,
    setText,
    speak,
    setLanguage,
  } = useSpeachSynthesisApi();

  const [selectedLanguage, setSelectedLanguage] = useState("en-US"); // Default language is English

  return (
    <div className="flex flex-col mt-10 justify-center items-center">
      <h1 className="font-bold text-3xl text-center mb-3">Text To Speach</h1>
      <div className="max-w-[36rem]">
        <Textarea
          placeholder="Enter Your Text"
          className="mb-3"
          rows={5}
          cols={50}
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div className="w-full flex justify-center items-center" >
        <Button className="text-white" onClick={speak}>
          Speak  
        </Button>
        <select
          value={selectedLanguage}
          onChange={(event) => {
            setSelectedLanguage(event.target.value);
            setLanguage(event.target.value); // Set the language when user selects from dropdown
          }}
          className="text-black ml-2 rounded-xl px-5 py-2 text-lg"
        >
          <option value="en-US">English</option>
          <option value="de-DE">German</option>
          <option value="fr-FR">French</option>
          <option value="es-ES">Spanish</option>
          <option value="zh-CN">Chinese (Simplified)</option>
          <option value="zh-TW">Chinese (Traditional)</option>
          <option value="hi-IN">Hindi</option>
          <option value="ar-SA">Arabic</option>
          <option value="ru-RU">Russian</option>
          <option value="pt-BR">Portuguese (Brazil)</option>
          <option value="ja-JP">Japanese</option>
          <option value="ko-KR">Korean</option>
          <option value="it-IT">Italian</option>
          <option value="tr-TR">Turkish</option>
          <option value="nl-NL">Dutch</option>
          <option value="vi-VN">Vietnamese</option>
          <option value="pl-PL">Polish</option>
          <option value="fa-IR">Persian (Farsi)</option>
          <option value="th-TH">Thai</option>
          <option value="sw-KE">Swahili</option>
          <option value="id-ID">Indonesian</option>
          <option value="sv-SE">Swedish</option>
          <option value="uk-UA">Ukrainian</option>
          <option value="ro-RO">Romanian</option>
          <option value="hu-HU">Hungarian</option>
          <option value="fi-FI">Finnish</option>
          <option value="el-GR">Greek</option>
          <option value="cs-CZ">Czech</option>
          <option value="da-DK">Danish</option>
          <option value="no-NO">Norwegian</option>
          <option value="he-IL">Hebrew</option>
          <option value="ms-MY">Malay</option>
          <option value="sr-RS">Serbian</option>
          <option value="hr-HR">Croatian</option>
          <option value="bn-IN">Bengali</option>
          <option value="bg-BG">Bulgarian</option>
          <option value="sk-SK">Slovak</option>
          <option value="lt-LT">Lithuanian</option>
          <option value="sl-SI">Slovenian</option>
          <option value="lv-LV">Latvian</option>
          <option value="et-EE">Estonian</option>
          <option value="sq-AL">Albanian</option>
          <option value="ur-PK">Urdu</option>
          <option value="ta-IN">Tamil</option>
          <option value="mr-IN">Marathi</option>
          <option value="gu-IN">Gujarati</option>
          <option value="kn-IN">Kannada</option>
          <option value="te-IN">Telugu</option>
          <option value="ml-IN">Malayalam</option>
          <option value="pa-IN">Punjabi</option>
          <option value="or-IN">Odia (Oriya)</option>
          <option value="as-IN">Assamese</option>
          <option value="ne-NP">Nepali</option>
          <option value="si-LK">Sinhala</option>
          <option value="my-MM">Burmese</option>
          <option value="km-KH">Khmer</option>
          <option value="lo-LA">Lao</option>
          <option value="dz-BT">Dzongkha</option>
          <option value="ka-GE">Georgian</option>
          <option value="am-ET">Amharic</option>
          <option value="ig-NG">Igbo</option>
          <option value="yo-NG">Yoruba</option>
          <option value="ha-NG">Hausa</option>
          <option value="so-SO">Somali</option>
          <option value="pcm-NG">Nigerian Pidgin</option>
          <option value="zu-ZA">Zulu</option>
          <option value="xh-ZA">Xhosa</option>
          <option value="st-ZA">Southern Sotho</option>
          <option value="tn-ZA">Tswana</option>
          <option value="ts-ZA">Tsonga</option>
          <option value="ss-ZA">Swazi</option>
          <option value="ve-ZA">Venda</option>
          <option value="nr-ZA">Ndebele</option>
          <option value="fy-NL">Western Frisian</option>
          <option value="gd-GB">Scottish Gaelic</option>
          <option value="cy-GB">Welsh</option>
          <option value="ga-IE">Irish</option>
          <option value="eu-ES">Basque</option>
          <option value="gl-ES">Galician</option>
          <option value="ca-ES">Catalan</option>
          <option value="ast-ES">Asturian</option>
          <option value="br-FR">Breton</option>
          <option value="co-FR">Corsican</option>
          <option value="oc-FR">Occitan</option>
          <option value="gv-GB">Manx</option>
          <option value="kw-GB">Cornish</option>
          <option value="ln-CD">Lingala</option>
          <option value="lg-UG">Ganda</option>
          <option value="xog-UG">Soga</option>
          <option value="nso-ZA">Northern Sotho</option>

          {/* Add more options for other languages as needed */}
        </select>
      </div>
    </div>
  );
}