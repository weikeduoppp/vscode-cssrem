import { PxToRemResult } from './interface'

export class CssRemProcess {
  constructor(private cog: any) {}

  // 校验rem
  private rePx: RegExp = /([-]?[\d.]+)re(m)?/

  private rePxAll: RegExp = /([-]?[\d.]+)rem/g

  /**
   * rem -> rem  将目标rem转换成自己想要的rem  想要的是 设计图为750 * 1334的.
   */
  private pxToRem(pxStr: string): PxToRemResult {
    const px = parseFloat(pxStr)
    let remValue: number | string = +(
      (px * this.cog.rootFontSize) /
      100
    ).toFixed(this.cog.fixedDigits)
    if (this.cog.autoRemovePrefixZero) {
      if (remValue.toString().startsWith('0.')) {
        remValue = remValue.toString().substring(1)
      }
    }
    return { px: pxStr, pxValue: px, remValue, rem: remValue + 'rem' }
  }

  /**
   * px转rem
   *
   * @param {string} text 需要转换文本，例如：10px 12p
   */
  convert(text: string): PxToRemResult {
    let match = text.match(this.rePx)
    if (!match) return null

    return this.pxToRem(match[1])
  }

  /** 批量转换 */
  convertAll(code: string, ingores: string[]): string {
    if (!code) return code
    return code.replace(this.rePxAll, (word: string) => {
      if (ingores.includes(word)) return word
      const res = this.pxToRem(word)
      if (res) return res.rem
      return word
    })
  }
}
