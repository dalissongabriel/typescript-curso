export class RegexUtils {
    static SanitizarHTML(templateHtml) {
        return templateHtml.replace(RegexUtils.tagScriptRegex, "");
    }
}
RegexUtils.tagScriptRegex = /<script>[\s\S]*?<\/script>/;
