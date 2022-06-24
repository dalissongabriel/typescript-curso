export class RegexUtils {
  private static tagScriptRegex: RegExp = /<script>[\s\S]*?<\/script>/;

  public static SanitizarHTML(templateHtml: string): string {
    return templateHtml.replace(RegexUtils.tagScriptRegex, "");
  }
}
