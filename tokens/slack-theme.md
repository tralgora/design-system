# Slack sidebar theme

Brand-matched theme for the Tralgora Slack workspace, derived from the canonical oklch
tokens in `tokens.css`. Slack themes accept sRGB hex only, so the values below are the
hex conversions of the source tokens.

## Scope and limits

- A Slack theme restyles the **left sidebar / navigation only**. The message pane follows
  Slack's Color Mode, so set `Preferences > Appearance > Color Mode > Dark` for the rest of
  the UI to read as dark. There is no full reskin.
- A custom theme is **per-user**; there is no workspace-wide default (any plan). Share it by
  pasting the string into a channel - others click **Apply Slack theme**.

## Slot mapping

Slack's shareable theme is 8 comma-separated hex values in this fixed order:

| # | Slack slot | Source token | Hex |
|---|------------|--------------|-----|
| 1 | Column BG | `--bg` | `#090E12` |
| 2 | Menu BG Hover | `--surface-3` | `#242A30` |
| 3 | Active Item | `--green-dim` / `--blue-dim` | `#0E9254` / `#007BAD` |
| 4 | Active Item Text | `--text-1` | `#F3F5F8` |
| 5 | Hover Item | `--surface-2` | `#1A2026` |
| 6 | Text Color | `--text-1` | `#F3F5F8` |
| 7 | Active Presence | `--green` | `#14E888` |
| 8 | Mention Badge | `--red` | `#FF6661` |

## Theme strings

Green accent (recommended - the signature signal color):

```
#090E12,#242A30,#0E9254,#F3F5F8,#1A2026,#F3F5F8,#14E888,#FF6661
```

Blue accent (subdued alternative):

```
#090E12,#242A30,#007BAD,#F3F5F8,#1A2026,#F3F5F8,#14E888,#FF6661
```

## Apply

1. `Preferences > Appearance > Color Mode > Dark`.
2. `Preferences > Appearance > Custom theme` (older builds: `Themes`) - set the 8 swatches,
   or paste the string into the custom-theme field.
3. To share: post the string in a channel; members click **Apply Slack theme**.

## Regenerating

These hexes are a conversion of the oklch tokens - if a source token changes, regenerate
rather than hand-editing. oklch -> sRGB hex:

```python
import math
def oklch_to_hex(L, C, H):
    h = math.radians(H); a = C*math.cos(h); b = C*math.sin(h)
    l_ = L + 0.3963377774*a + 0.2158037573*b
    m_ = L - 0.1055613458*a - 0.0638541728*b
    s_ = L - 0.0894841775*a - 1.2914855480*b
    l, m, s = l_**3, m_**3, s_**3
    r  =  4.0767416621*l - 3.3077115913*m + 0.2309699292*s
    g  = -1.2684380046*l + 2.6097574011*m - 0.3413193965*s
    bl = -0.0041960863*l - 0.7034186147*m + 1.7076147010*s
    def enc(c):
        c = max(0, min(1, c))
        c = 12.92*c if c <= 0.0031308 else 1.055*c**(1/2.4) - 0.055
        return round(max(0, min(1, c))*255)
    return "#{:02X}{:02X}{:02X}".format(enc(r), enc(g), enc(bl))
```

Source tokens used: `--bg (0.16 0.012 250)`, `--surface-2 (0.24 0.014 250)`,
`--surface-3 (0.28 0.014 250)`, `--text-1 (0.97 0.005 250)`, `--green (0.82 0.20 155)`,
`--green-dim (0.58 0.14 155)`, `--blue-dim (0.55 0.12 235)`, `--red (0.72 0.20 25)`.
