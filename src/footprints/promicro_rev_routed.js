// Arduino ProMicro atmega32u4au
// Params
//  orientation: default is down
//    if down, power led will face the pcb
//    if up, power led will face away from pcb

module.exports = {
  nets: {
    RAW: 'RAW',
    GND: 'GND',
    RST: 'RST',
    VCC: 'VCC',
    P21: 'P21',
    P20: 'P20',
    P19: 'P19',
    P18: 'P18',
    P15: 'P15',
    P14: 'P14',
    P16: 'P16',
    P10: 'P10',
    P1: 'P1',
    P0: 'P0',
    P2: 'P2',
    P3: 'P3',
    P4: 'P4',
    P5: 'P5',
    P6: 'P6',
    P7: 'P7',
    P8: 'P8',
    P9: 'P9',
  },
  params: {
    class: 'MCU',
    orientation: 'down'
  },
  body: p => {
      return `
      (module ProMicro_routed (layer F.Cu) (tedit 611912F6)
        ${p.at /* parametric position */}
        (descr "Pro Micro footprint")
        (tags "promicro ProMicro")
        (fp_text reference "${p.ref}" (at -16.256 -0.254 ${p.rot + 90}) (layer F.SilkS) ${p.ref_hide}
          (effects (font (size 1 1) (thickness 0.15)))
        )
        (fp_text value ProMicro_routed (at 16.51 0 ${p.rot + 90}) (layer F.Fab)
          (effects (font (size 1 1) (thickness 0.15)))
        )
        (fp_poly (pts (xy -13.462 10.16) (xy -14.478 10.16) (xy -14.478 9.144) (xy -13.462 9.144)) (layer F.Mask) (width 0.1))
        (fp_line (start 15.24 -8.89) (end 15.24 8.89) (layer B.SilkS) (width 0.15))
        (fp_line (start -15.24 8.89) (end -15.24 -8.89) (layer B.SilkS) (width 0.15))
        (fp_line (start -15.24 8.89) (end -15.24 -8.89) (layer F.SilkS) (width 0.15))
        (fp_line (start 15.24 -8.89) (end 15.24 8.89) (layer F.SilkS) (width 0.15))
        (fp_poly (pts (xy -10.922 10.16) (xy -11.938 10.16) (xy -11.938 9.144) (xy -10.922 9.144)) (layer F.Mask) (width 0.1))
        (fp_poly (pts (xy -8.382 10.16) (xy -9.398 10.16) (xy -9.398 9.144) (xy -8.382 9.144)) (layer F.Mask) (width 0.1))
        (fp_poly (pts (xy -5.842 10.16) (xy -6.858 10.16) (xy -6.858 9.144) (xy -5.842 9.144)) (layer F.Mask) (width 0.1))
        (fp_poly (pts (xy -3.302 10.16) (xy -4.318 10.16) (xy -4.318 9.144) (xy -3.302 9.144)) (layer F.Mask) (width 0.1))
        (fp_poly (pts (xy -0.762 10.16) (xy -1.778 10.16) (xy -1.778 9.144) (xy -0.762 9.144)) (layer F.Mask) (width 0.1))
        (fp_poly (pts (xy 1.778 10.16) (xy 0.762 10.16) (xy 0.762 9.144) (xy 1.778 9.144)) (layer F.Mask) (width 0.1))
        (fp_poly (pts (xy 4.318 10.16) (xy 3.302 10.16) (xy 3.302 9.144) (xy 4.318 9.144)) (layer F.Mask) (width 0.1))
        (fp_poly (pts (xy 6.858 10.16) (xy 5.842 10.16) (xy 5.842 9.144) (xy 6.858 9.144)) (layer F.Mask) (width 0.1))
        (fp_poly (pts (xy 9.398 10.16) (xy 8.382 10.16) (xy 8.382 9.144) (xy 9.398 9.144)) (layer F.Mask) (width 0.1))
        (fp_poly (pts (xy 11.938 10.16) (xy 10.922 10.16) (xy 10.922 9.144) (xy 11.938 9.144)) (layer F.Mask) (width 0.1))
        (fp_poly (pts (xy 14.478 10.16) (xy 13.462 10.16) (xy 13.462 9.144) (xy 14.478 9.144)) (layer F.Mask) (width 0.1))
        (fp_line (start -15.24 8.89) (end 15.24 8.89) (layer F.SilkS) (width 0.15))
        (fp_line (start -15.24 8.89) (end 15.24 8.89) (layer B.SilkS) (width 0.15))
        (fp_line (start -15.24 -8.89) (end 15.24 -8.89) (layer F.SilkS) (width 0.15))
        (fp_line (start -15.24 -8.89) (end 15.24 -8.89) (layer B.SilkS) (width 0.15))
        (fp_poly (pts (xy 13.462 -10.16) (xy 14.478 -10.16) (xy 14.478 -9.144) (xy 13.462 -9.144)) (layer F.Mask) (width 0.1))
        (fp_poly (pts (xy 8.382 -10.16) (xy 9.398 -10.16) (xy 9.398 -9.144) (xy 8.382 -9.144)) (layer F.Mask) (width 0.1))
        (fp_poly (pts (xy 3.302 -10.16) (xy 4.318 -10.16) (xy 4.318 -9.144) (xy 3.302 -9.144)) (layer F.Mask) (width 0.1))
        (fp_poly (pts (xy -6.858 -10.16) (xy -5.842 -10.16) (xy -5.842 -9.144) (xy -6.858 -9.144)) (layer F.Mask) (width 0.1))
        (fp_poly (pts (xy 10.922 -10.16) (xy 11.938 -10.16) (xy 11.938 -9.144) (xy 10.922 -9.144)) (layer F.Mask) (width 0.1))
        (fp_poly (pts (xy 5.842 -10.16) (xy 6.858 -10.16) (xy 6.858 -9.144) (xy 5.842 -9.144)) (layer F.Mask) (width 0.1))
        (fp_poly (pts (xy -1.778 -10.16) (xy -0.762 -10.16) (xy -0.762 -9.144) (xy -1.778 -9.144)) (layer F.Mask) (width 0.1))
        (fp_poly (pts (xy -4.318 -10.16) (xy -3.302 -10.16) (xy -3.302 -9.144) (xy -4.318 -9.144)) (layer F.Mask) (width 0.1))
        (fp_poly (pts (xy -9.398 -10.16) (xy -8.382 -10.16) (xy -8.382 -9.144) (xy -9.398 -9.144)) (layer F.Mask) (width 0.1))
        (fp_poly (pts (xy -11.938 -10.16) (xy -10.922 -10.16) (xy -10.922 -9.144) (xy -11.938 -9.144)) (layer F.Mask) (width 0.1))
        (fp_poly (pts (xy 0.762 -10.16) (xy 1.778 -10.16) (xy 1.778 -9.144) (xy 0.762 -9.144)) (layer F.Mask) (width 0.1))
        (fp_poly (pts (xy -14.478 -10.16) (xy -13.462 -10.16) (xy -13.462 -9.144) (xy -14.478 -9.144)) (layer F.Mask) (width 0.1))
        (fp_poly (pts (xy -13.462 10.16) (xy -14.478 10.16) (xy -14.478 9.144) (xy -13.462 9.144)) (layer B.Mask) (width 0.1))
        (fp_poly (pts (xy -10.922 10.16) (xy -11.938 10.16) (xy -11.938 9.144) (xy -10.922 9.144)) (layer B.Mask) (width 0.1))
        (fp_poly (pts (xy -8.382 10.16) (xy -9.398 10.16) (xy -9.398 9.144) (xy -8.382 9.144)) (layer B.Mask) (width 0.1))
        (fp_poly (pts (xy -5.842 10.16) (xy -6.858 10.16) (xy -6.858 9.144) (xy -5.842 9.144)) (layer B.Mask) (width 0.1))
        (fp_poly (pts (xy -3.302 10.16) (xy -4.318 10.16) (xy -4.318 9.144) (xy -3.302 9.144)) (layer B.Mask) (width 0.1))
        (fp_poly (pts (xy -0.762 10.16) (xy -1.778 10.16) (xy -1.778 9.144) (xy -0.762 9.144)) (layer B.Mask) (width 0.1))
        (fp_poly (pts (xy 1.778 10.16) (xy 0.762 10.16) (xy 0.762 9.144) (xy 1.778 9.144)) (layer B.Mask) (width 0.1))
        (fp_poly (pts (xy 4.318 10.16) (xy 3.302 10.16) (xy 3.302 9.144) (xy 4.318 9.144)) (layer B.Mask) (width 0.1))
        (fp_poly (pts (xy 6.858 10.16) (xy 5.842 10.16) (xy 5.842 9.144) (xy 6.858 9.144)) (layer B.Mask) (width 0.1))
        (fp_poly (pts (xy 9.398 10.16) (xy 8.382 10.16) (xy 8.382 9.144) (xy 9.398 9.144)) (layer B.Mask) (width 0.1))
        (fp_poly (pts (xy 11.938 10.16) (xy 10.922 10.16) (xy 10.922 9.144) (xy 11.938 9.144)) (layer B.Mask) (width 0.1))
        (fp_poly (pts (xy 14.478 10.16) (xy 13.462 10.16) (xy 13.462 9.144) (xy 14.478 9.144)) (layer B.Mask) (width 0.1))
        (fp_poly (pts (xy -14.478 -10.16) (xy -13.462 -10.16) (xy -13.462 -9.144) (xy -14.478 -9.144)) (layer B.Mask) (width 0.1))
        (fp_poly (pts (xy -11.938 -10.16) (xy -10.922 -10.16) (xy -10.922 -9.144) (xy -11.938 -9.144)) (layer B.Mask) (width 0.1))
        (fp_poly (pts (xy -9.398 -10.16) (xy -8.382 -10.16) (xy -8.382 -9.144) (xy -9.398 -9.144)) (layer B.Mask) (width 0.1))
        (fp_poly (pts (xy -6.858 -10.16) (xy -5.842 -10.16) (xy -5.842 -9.144) (xy -6.858 -9.144)) (layer B.Mask) (width 0.1))
        (fp_poly (pts (xy -4.318 -10.16) (xy -3.302 -10.16) (xy -3.302 -9.144) (xy -4.318 -9.144)) (layer B.Mask) (width 0.1))
        (fp_poly (pts (xy -1.778 -10.16) (xy -0.762 -10.16) (xy -0.762 -9.144) (xy -1.778 -9.144)) (layer B.Mask) (width 0.1))
        (fp_poly (pts (xy 0.762 -10.16) (xy 1.778 -10.16) (xy 1.778 -9.144) (xy 0.762 -9.144)) (layer B.Mask) (width 0.1))
        (fp_poly (pts (xy 3.302 -10.16) (xy 4.318 -10.16) (xy 4.318 -9.144) (xy 3.302 -9.144)) (layer B.Mask) (width 0.1))
        (fp_poly (pts (xy 5.842 -10.16) (xy 6.858 -10.16) (xy 6.858 -9.144) (xy 5.842 -9.144)) (layer B.Mask) (width 0.1))
        (fp_poly (pts (xy 8.382 -10.16) (xy 9.398 -10.16) (xy 9.398 -9.144) (xy 8.382 -9.144)) (layer B.Mask) (width 0.1))
        (fp_poly (pts (xy 10.922 -10.16) (xy 11.938 -10.16) (xy 11.938 -9.144) (xy 10.922 -9.144)) (layer B.Mask) (width 0.1))
        (fp_poly (pts (xy 13.462 -10.16) (xy 14.478 -10.16) (xy 14.478 -9.144) (xy 13.462 -9.144)) (layer B.Mask) (width 0.1))
        (fp_circle (center -13.97 -0.762) (end -13.845 -0.762) (layer F.Mask) (width 0.25))
        (fp_circle (center -13.97 -0.762) (end -13.845 -0.762) (layer B.Mask) (width 0.25))
        (fp_circle (center -13.97 0.762) (end -13.845 0.762) (layer F.Mask) (width 0.25))
        (fp_circle (center -13.97 0.762) (end -13.845 0.762) (layer B.Mask) (width 0.25))
        (fp_circle (center -11.43 0.762) (end -11.305 0.762) (layer F.Mask) (width 0.25))
        (fp_circle (center -11.43 0.762) (end -11.305 0.762) (layer B.Mask) (width 0.25))
        (fp_circle (center -11.43 -0.762) (end -11.305 -0.762) (layer F.Mask) (width 0.25))
        (fp_circle (center -11.43 -0.762) (end -11.305 -0.762) (layer B.Mask) (width 0.25))
        (fp_circle (center -8.89 -0.762) (end -8.765 -0.762) (layer F.Mask) (width 0.25))
        (fp_circle (center -8.89 -0.762) (end -8.765 -0.762) (layer B.Mask) (width 0.25))
        (fp_circle (center -8.89 0.762) (end -8.765 0.762) (layer F.Mask) (width 0.25))
        (fp_circle (center -8.89 0.762) (end -8.765 0.762) (layer B.Mask) (width 0.25))
        (fp_circle (center -6.35 -0.762) (end -6.225 -0.762) (layer F.Mask) (width 0.25))
        (fp_circle (center -6.35 -0.762) (end -6.225 -0.762) (layer B.Mask) (width 0.25))
        (fp_circle (center -6.35 0.762) (end -6.225 0.762) (layer F.Mask) (width 0.25))
        (fp_circle (center -6.35 0.762) (end -6.225 0.762) (layer B.Mask) (width 0.25))
        (fp_circle (center -3.81 -0.762) (end -3.685 -0.762) (layer F.Mask) (width 0.25))
        (fp_circle (center -3.81 -0.762) (end -3.685 -0.762) (layer B.Mask) (width 0.25))
        (fp_circle (center -3.81 0.762) (end -3.685 0.762) (layer F.Mask) (width 0.25))
        (fp_circle (center -3.81 0.762) (end -3.685 0.762) (layer B.Mask) (width 0.25))
        (fp_circle (center -1.27 -0.762) (end -1.145 -0.762) (layer F.Mask) (width 0.25))
        (fp_circle (center -1.27 -0.762) (end -1.145 -0.762) (layer B.Mask) (width 0.25))
        (fp_circle (center -1.27 0.762) (end -1.145 0.762) (layer F.Mask) (width 0.25))
        (fp_circle (center -1.27 0.762) (end -1.145 0.762) (layer B.Mask) (width 0.25))
        (fp_circle (center 1.27 -0.762) (end 1.395 -0.762) (layer F.Mask) (width 0.25))
        (fp_circle (center 1.27 -0.762) (end 1.395 -0.762) (layer B.Mask) (width 0.25))
        (fp_circle (center 1.27 0.762) (end 1.395 0.762) (layer F.Mask) (width 0.25))
        (fp_circle (center 1.27 0.762) (end 1.395 0.762) (layer B.Mask) (width 0.25))
        (fp_circle (center 3.81 -0.762) (end 3.935 -0.762) (layer F.Mask) (width 0.25))
        (fp_circle (center 3.81 -0.762) (end 3.935 -0.762) (layer B.Mask) (width 0.25))
        (fp_circle (center 3.81 0.762) (end 3.935 0.762) (layer F.Mask) (width 0.25))
        (fp_circle (center 3.81 0.762) (end 3.935 0.762) (layer B.Mask) (width 0.25))
        (fp_circle (center 6.35 -0.762) (end 6.475 -0.762) (layer F.Mask) (width 0.25))
        (fp_circle (center 6.35 -0.762) (end 6.475 -0.762) (layer B.Mask) (width 0.25))
        (fp_circle (center 6.35 0.762) (end 6.475 0.762) (layer F.Mask) (width 0.25))
        (fp_circle (center 6.35 0.762) (end 6.475 0.762) (layer B.Mask) (width 0.25))
        (fp_circle (center 8.89 -0.762) (end 9.015 -0.762) (layer F.Mask) (width 0.25))
        (fp_circle (center 8.89 -0.762) (end 9.015 -0.762) (layer B.Mask) (width 0.25))
        (fp_circle (center 8.89 0.762) (end 9.015 0.762) (layer F.Mask) (width 0.25))
        (fp_circle (center 8.89 0.762) (end 9.015 0.762) (layer B.Mask) (width 0.25))
        (fp_circle (center 11.43 -0.762) (end 11.555 -0.762) (layer F.Mask) (width 0.25))
        (fp_circle (center 11.43 -0.762) (end 11.555 -0.762) (layer B.Mask) (width 0.25))
        (fp_circle (center 11.43 0.762) (end 11.555 0.762) (layer F.Mask) (width 0.25))
        (fp_circle (center 11.43 0.762) (end 11.555 0.762) (layer B.Mask) (width 0.25))
        (fp_circle (center 13.97 -0.762) (end 14.095 -0.762) (layer F.Mask) (width 0.25))
        (fp_circle (center 13.97 -0.762) (end 14.095 -0.762) (layer B.Mask) (width 0.25))
        (fp_circle (center 13.97 0.762) (end 14.095 0.762) (layer F.Mask) (width 0.25))
        (fp_circle (center 13.97 0.762) (end 14.095 0.762) (layer B.Mask) (width 0.25))
        (pad 2 smd custom (at -11.43 -0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 8.382) (width 0.25))
            (gr_line (start -1.27 8.382) (end 0 9.652) (width 0.25))
          ) ${p.net.P0.str})
        (pad "" thru_hole circle (at -13.97 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)
          (zone_connect 0))
        (pad "" thru_hole circle (at -11.43 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at -8.89 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at -6.35 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at -3.81 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at -1.27 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at 1.27 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at 3.81 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at 6.35 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at 8.89 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at 11.43 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at 13.97 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at 13.97 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at 11.43 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at 8.89 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at 6.35 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at 3.81 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at 1.27 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at -1.27 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at -3.81 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at -6.35 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at -8.89 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at -11.43 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
        (pad "" thru_hole circle (at -13.97 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
        (pad "" smd custom (at -13.97 9.398 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 24 smd custom (at -13.97 10.414 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.RAW.str})
        (pad "" smd custom (at -13.97 8.89 ${p.rot}) (size 0.25 1) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" thru_hole rect (at -13.97 7.62 ${p.rot}) (size 1.6 1.6) (drill 1.1) (layers F.Cu F.Mask)
          (zone_connect 0))
        (pad "" thru_hole rect (at -13.97 -7.62 ${p.rot}) (size 1.6 1.6) (drill 1.1) (layers B.Cu B.Mask)
          (zone_connect 0))
        (pad "" smd custom (at -11.43 8.89 ${p.rot}) (size 0.25 1) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at -11.43 9.398 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 23 smd custom (at -11.43 10.414 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.GND.str})
        (pad "" smd custom (at -8.89 8.89 ${p.rot}) (size 0.25 1) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at -8.89 9.398 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 22 smd custom (at -8.89 10.414 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.RST.str})
        (pad "" smd custom (at -6.35 8.89 ${p.rot}) (size 0.25 1) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at -6.35 9.398 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 21 smd custom (at -6.35 10.414 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.VCC.str})
        (pad "" smd custom (at -3.81 8.89 ${p.rot}) (size 0.25 1) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at -3.81 9.398 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 20 smd custom (at -3.81 10.414 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P21.str})
        (pad "" smd custom (at -1.27 8.89 ${p.rot}) (size 0.25 1) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at -1.27 9.398 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 19 smd custom (at -1.27 10.414 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P20.str})
        (pad "" smd custom (at 1.27 8.89 ${p.rot}) (size 0.25 1) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at 1.27 9.398 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 18 smd custom (at 1.27 10.414 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P19.str})
        (pad "" smd custom (at 3.81 8.89 ${p.rot}) (size 0.25 1) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at 3.81 9.398 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 17 smd custom (at 3.81 10.414 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P18.str})
        (pad "" smd custom (at 6.35 8.89 ${p.rot}) (size 0.25 1) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at 6.35 9.398 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 16 smd custom (at 6.35 10.414 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P15.str})
        (pad "" smd custom (at 8.89 8.89 ${p.rot}) (size 0.25 1) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at 8.89 9.398 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 15 smd custom (at 8.89 10.414 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P14.str})
        (pad "" smd custom (at 11.43 8.89 ${p.rot}) (size 0.25 1) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at 11.43 9.398 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 14 smd custom (at 11.43 10.414 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P16.str})
        (pad "" smd custom (at 13.97 8.89 ${p.rot}) (size 0.25 1) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at 13.97 9.398 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 13 smd custom (at 13.97 10.414 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P10.str})
        (pad 1 smd custom (at -13.97 -10.414 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P1.str})
        (pad 3 smd custom (at -8.89 -10.414 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.GND.str})
        (pad "" smd custom (at -8.89 -8.89 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at -8.89 -9.398 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad "" smd custom (at -13.97 -9.398 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad "" smd custom (at -11.43 -8.89 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad 2 smd custom (at -11.43 -10.414 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P0.str})
        (pad "" smd custom (at -13.97 -8.89 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad 4 smd custom (at -6.35 -10.414 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.GND.str})
        (pad "" smd custom (at -11.43 -9.398 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad "" smd custom (at -6.35 -9.398 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 6 smd custom (at -1.27 -10.414 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P3.str})
        (pad 7 smd custom (at 1.27 -10.414 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P4.str})
        (pad "" smd custom (at 13.97 -8.89 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at 1.27 -9.398 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad "" smd custom (at 8.89 -8.89 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad 8 smd custom (at 3.81 -10.414 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P5.str})
        (pad "" smd custom (at 1.27 -8.89 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad 12 smd custom (at 13.97 -10.414 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P9.str})
        (pad "" smd custom (at 3.81 -9.398 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad "" smd custom (at 6.35 -8.89 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at 13.97 -9.398 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad "" smd custom (at -3.81 -8.89 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at 3.81 -8.89 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at -1.27 -8.89 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad 9 smd custom (at 6.35 -10.414 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P6.str})
        (pad "" smd custom (at -6.35 -8.89 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at -3.81 -9.398 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad "" smd custom (at -1.27 -9.398 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad "" smd custom (at 6.35 -9.398 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 10 smd custom (at 8.89 -10.414 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P7.str})
        (pad "" smd custom (at 8.89 -9.398 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad "" smd custom (at 11.43 -9.398 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 11 smd custom (at 11.43 -10.414 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P8.str})
        (pad "" smd custom (at 11.43 -8.89 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad 5 smd custom (at -3.81 -10.414 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P2.str})
        (pad "" smd custom (at -13.97 8.89 ${p.rot}) (size 0.25 1) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad 1 smd custom (at -13.97 10.414 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P1.str})
        (pad "" smd custom (at -13.97 9.398 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad "" smd custom (at -11.43 8.89 ${p.rot}) (size 0.25 1) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at -11.43 9.398 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 2 smd custom (at -11.43 10.414 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P0.str})
        (pad "" smd custom (at -8.89 8.89 ${p.rot}) (size 0.25 1) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at -8.89 9.398 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 3 smd custom (at -8.89 10.414 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.GND.str})
        (pad "" smd custom (at -6.35 8.89 ${p.rot}) (size 0.25 1) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at -6.35 9.398 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 4 smd custom (at -6.35 10.414 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.GND.str})
        (pad "" smd custom (at -3.81 8.89 ${p.rot}) (size 0.25 1) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at -3.81 9.398 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 5 smd custom (at -3.81 10.414 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P2.str})
        (pad "" smd custom (at -1.27 8.89 ${p.rot}) (size 0.25 1) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at -1.27 9.398 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 6 smd custom (at -1.27 10.414 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P3.str})
        (pad "" smd custom (at 1.27 8.89 ${p.rot}) (size 0.25 1) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at 1.27 9.398 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 7 smd custom (at 1.27 10.414 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P4.str})
        (pad "" smd custom (at 3.81 8.89 ${p.rot}) (size 0.25 1) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at 3.81 9.398 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 8 smd custom (at 3.81 10.414 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P5.str})
        (pad "" smd custom (at 6.35 8.89 ${p.rot}) (size 0.25 1) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at 6.35 9.398 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 9 smd custom (at 6.35 10.414 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P6.str})
        (pad "" smd custom (at 8.89 8.89 ${p.rot}) (size 0.25 1) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at 8.89 9.398 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 10 smd custom (at 8.89 10.414 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P7.str})
        (pad "" smd custom (at 11.43 8.89 ${p.rot}) (size 0.25 1) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at 11.43 9.398 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 11 smd custom (at 11.43 10.414 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P8.str})
        (pad "" smd custom (at 13.97 8.89 ${p.rot}) (size 0.25 1) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at 13.97 9.398 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 12 smd custom (at 13.97 10.414 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P9.str})
        (pad "" smd custom (at -13.97 -8.89 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at -13.97 -9.398 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 24 smd custom (at -13.97 -10.414 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.RAW.str})
        (pad 23 smd custom (at -11.43 -10.414 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.GND.str})
        (pad "" smd custom (at -11.43 -8.89 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at -11.43 -9.398 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 22 smd custom (at -8.89 -10.414 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.RST.str})
        (pad "" smd custom (at -8.89 -8.89 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at -8.89 -9.398 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 21 smd custom (at -6.35 -10.414 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.VCC.str})
        (pad "" smd custom (at -6.35 -8.89 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at -6.35 -9.398 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 20 smd custom (at -3.81 -10.414 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P21.str})
        (pad "" smd custom (at -3.81 -8.89 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at -3.81 -9.398 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 19 smd custom (at -1.27 -10.414 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P20.str})
        (pad "" smd custom (at -1.27 -8.89 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at -1.27 -9.398 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 18 smd custom (at 1.27 -10.414 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P19.str})
        (pad "" smd custom (at 1.27 -8.89 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at 1.27 -9.398 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 17 smd custom (at 3.81 -10.414 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P18.str})
        (pad "" smd custom (at 3.81 -8.89 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at 3.81 -9.398 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 16 smd custom (at 6.35 -10.414 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P15.str})
        (pad "" smd custom (at 6.35 -8.89 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at 6.35 -9.398 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 15 smd custom (at 8.89 -10.414 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P14.str})
        (pad "" smd custom (at 8.89 -8.89 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at 8.89 -9.398 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 14 smd custom (at 11.43 -10.414 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P16.str})
        (pad "" smd custom (at 11.43 -8.89 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at 11.43 -9.398 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 13 smd custom (at 13.97 -10.414 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
      ) (width 0))
          ) ${p.net.P10.str})
        (pad "" smd custom (at 13.97 -8.89 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
          ))
        (pad "" smd custom (at 13.97 -9.398 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
          (clearance 0.1) (zone_connect 0)
          (options (clearance outline) (anchor rect))
          (primitives
            (gr_poly (pts
               (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
      ) (width 0))
          ))
        (pad 23 smd custom (at -11.43 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 1.27 -1.27) (width 0.25))
            (gr_line (start 1.27 -1.27) (end 1.27 -8.382) (width 0.25))
            (gr_line (start 1.27 -8.382) (end 0 -9.652) (width 0.25))
          ) ${p.net.GND.str})
        (pad 23 smd custom (at -11.43 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 9.906) (width 0.25))
            (gr_line (start -1.27 9.906) (end 0 11.176) (width 0.25))
          ) ${p.net.GND.str})
        (pad 2 smd custom (at -11.43 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 9.906) (width 0.25))
            (gr_line (start -1.27 9.906) (end 0 11.176) (width 0.25))
          ) ${p.net.P0.str})
        (pad 2 thru_hole circle (at -11.43 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.P0.str})
        (pad 23 thru_hole circle (at -11.43 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.GND.str})
        (pad 24 thru_hole circle (at -13.97 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.RAW.str})
        (pad 1 thru_hole circle (at -13.97 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.P1.str})
        (pad 24 smd custom (at -13.97 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 9.906) (width 0.25))
            (gr_line (start -1.27 9.906) (end 0 11.176) (width 0.25))
          ) ${p.net.RAW.str})
        (pad 1 smd custom (at -13.97 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 9.906) (width 0.25))
            (gr_line (start -1.27 9.906) (end 0 11.176) (width 0.25))
          ) ${p.net.P1.str})
        (pad 1 smd custom (at -13.97 -0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 8.382) (width 0.25))
            (gr_line (start -1.27 8.382) (end 0 9.652) (width 0.25))
          ) ${p.net.P1.str})
        (pad 24 smd custom (at -13.97 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 1.27 -1.27) (width 0.25))
            (gr_line (start 1.27 -1.27) (end 1.27 -8.382) (width 0.25))
            (gr_line (start 1.27 -8.382) (end 0 -9.652) (width 0.25))
          ) ${p.net.RAW.str})
        (pad 22 thru_hole circle (at -8.89 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.RST.str})
        (pad 3 thru_hole circle (at -8.89 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.GND.str})
        (pad 22 smd custom (at -8.89 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 9.906) (width 0.25))
            (gr_line (start -1.27 9.906) (end 0 11.176) (width 0.25))
          ) ${p.net.RST.str})
        (pad 3 smd custom (at -8.89 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 9.906) (width 0.25))
            (gr_line (start -1.27 9.906) (end 0 11.176) (width 0.25))
          ) ${p.net.GND.str})
        (pad 3 smd custom (at -8.89 -0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 8.382) (width 0.25))
            (gr_line (start -1.27 8.382) (end 0 9.652) (width 0.25))
          ) ${p.net.GND.str})
        (pad 22 smd custom (at -8.89 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 1.27 -1.27) (width 0.25))
            (gr_line (start 1.27 -1.27) (end 1.27 -8.382) (width 0.25))
            (gr_line (start 1.27 -8.382) (end 0 -9.652) (width 0.25))
          ) ${p.net.RST.str})
        (pad 21 thru_hole circle (at -6.35 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.VCC.str})
        (pad 4 thru_hole circle (at -6.35 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.GND.str})
        (pad 21 smd custom (at -6.35 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 9.906) (width 0.25))
            (gr_line (start -1.27 9.906) (end 0 11.176) (width 0.25))
          ) ${p.net.VCC.str})
        (pad 4 smd custom (at -6.35 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 9.906) (width 0.25))
            (gr_line (start -1.27 9.906) (end 0 11.176) (width 0.25))
          ) ${p.net.GND.str})
        (pad 4 smd custom (at -6.35 -0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 8.382) (width 0.25))
            (gr_line (start -1.27 8.382) (end 0 9.652) (width 0.25))
          ) ${p.net.GND.str})
        (pad 21 smd custom (at -6.35 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 1.27 -1.27) (width 0.25))
            (gr_line (start 1.27 -1.27) (end 1.27 -8.382) (width 0.25))
            (gr_line (start 1.27 -8.382) (end 0 -9.652) (width 0.25))
          ) ${p.net.VCC.str})
        (pad 20 thru_hole circle (at -3.81 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.P21.str})
        (pad 5 thru_hole circle (at -3.81 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.P2.str})
        (pad 20 smd custom (at -3.81 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 9.906) (width 0.25))
            (gr_line (start -1.27 9.906) (end 0 11.176) (width 0.25))
          ) ${p.net.P21.str})
        (pad 5 smd custom (at -3.81 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 9.906) (width 0.25))
            (gr_line (start -1.27 9.906) (end 0 11.176) (width 0.25))
          ) ${p.net.P2.str})
        (pad 5 smd custom (at -3.81 -0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 8.382) (width 0.25))
            (gr_line (start -1.27 8.382) (end 0 9.652) (width 0.25))
          ) ${p.net.P2.str})
        (pad 20 smd custom (at -3.81 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 1.27 -1.27) (width 0.25))
            (gr_line (start 1.27 -1.27) (end 1.27 -8.382) (width 0.25))
            (gr_line (start 1.27 -8.382) (end 0 -9.652) (width 0.25))
          ) ${p.net.P21.str})
        (pad 19 thru_hole circle (at -1.27 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.P20.str})
        (pad 6 thru_hole circle (at -1.27 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.P3.str})
        (pad 19 smd custom (at -1.27 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 9.906) (width 0.25))
            (gr_line (start -1.27 9.906) (end 0 11.176) (width 0.25))
          ) ${p.net.P20.str})
        (pad 6 smd custom (at -1.27 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 9.906) (width 0.25))
            (gr_line (start -1.27 9.906) (end 0 11.176) (width 0.25))
          ) ${p.net.P3.str})
        (pad 6 smd custom (at -1.27 -0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 8.382) (width 0.25))
            (gr_line (start -1.27 8.382) (end 0 9.652) (width 0.25))
          ) ${p.net.P3.str})
        (pad 19 smd custom (at -1.27 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 1.27 -1.27) (width 0.25))
            (gr_line (start 1.27 -1.27) (end 1.27 -8.382) (width 0.25))
            (gr_line (start 1.27 -8.382) (end 0 -9.652) (width 0.25))
          ) ${p.net.P20.str})
        (pad 18 thru_hole circle (at 1.27 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.P19.str})
        (pad 7 thru_hole circle (at 1.27 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.P4.str})
        (pad 18 smd custom (at 1.27 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 9.906) (width 0.25))
            (gr_line (start -1.27 9.906) (end 0 11.176) (width 0.25))
          ) ${p.net.P19.str})
        (pad 7 smd custom (at 1.27 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 9.906) (width 0.25))
            (gr_line (start -1.27 9.906) (end 0 11.176) (width 0.25))
          ) ${p.net.P4.str})
        (pad 7 smd custom (at 1.27 -0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 8.382) (width 0.25))
            (gr_line (start -1.27 8.382) (end 0 9.652) (width 0.25))
          ) ${p.net.P4.str})
        (pad 18 smd custom (at 1.27 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 1.27 -1.27) (width 0.25))
            (gr_line (start 1.27 -1.27) (end 1.27 -8.382) (width 0.25))
            (gr_line (start 1.27 -8.382) (end 0 -9.652) (width 0.25))
          ) ${p.net.P19.str})
        (pad 17 thru_hole circle (at 3.81 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.P18.str})
        (pad 8 thru_hole circle (at 3.81 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.P5.str})
        (pad 17 smd custom (at 3.81 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 9.906) (width 0.25))
            (gr_line (start -1.27 9.906) (end 0 11.176) (width 0.25))
          ) ${p.net.P18.str})
        (pad 8 smd custom (at 3.81 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 9.906) (width 0.25))
            (gr_line (start -1.27 9.906) (end 0 11.176) (width 0.25))
          ) ${p.net.P5.str})
        (pad 8 smd custom (at 3.81 -0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 8.382) (width 0.25))
            (gr_line (start -1.27 8.382) (end 0 9.652) (width 0.25))
          ) ${p.net.P5.str})
        (pad 17 smd custom (at 3.81 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 1.27 -1.27) (width 0.25))
            (gr_line (start 1.27 -1.27) (end 1.27 -8.382) (width 0.25))
            (gr_line (start 1.27 -8.382) (end 0 -9.652) (width 0.25))
          ) ${p.net.P18.str})
        (pad 16 thru_hole circle (at 6.35 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.P15.str})
        (pad 9 thru_hole circle (at 6.35 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.P6.str})
        (pad 16 smd custom (at 6.35 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 9.906) (width 0.25))
            (gr_line (start -1.27 9.906) (end 0 11.176) (width 0.25))
          ) ${p.net.P15.str})
        (pad 9 smd custom (at 6.35 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 9.906) (width 0.25))
            (gr_line (start -1.27 9.906) (end 0 11.176) (width 0.25))
          ) ${p.net.P6.str})
        (pad 9 smd custom (at 6.35 -0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 8.382) (width 0.25))
            (gr_line (start -1.27 8.382) (end 0 9.652) (width 0.25))
          ) ${p.net.P6.str})
        (pad 16 smd custom (at 6.35 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 1.27 -1.27) (width 0.25))
            (gr_line (start 1.27 -1.27) (end 1.27 -8.382) (width 0.25))
            (gr_line (start 1.27 -8.382) (end 0 -9.652) (width 0.25))
          ) ${p.net.P15.str})
        (pad 15 thru_hole circle (at 8.89 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.P14.str})
        (pad 10 thru_hole circle (at 8.89 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.P7.str})
        (pad 15 smd custom (at 8.89 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 9.906) (width 0.25))
            (gr_line (start -1.27 9.906) (end 0 11.176) (width 0.25))
          ) ${p.net.P14.str})
        (pad 10 smd custom (at 8.89 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 9.906) (width 0.25))
            (gr_line (start -1.27 9.906) (end 0 11.176) (width 0.25))
          ) ${p.net.P7.str})
        (pad 10 smd custom (at 8.89 -0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 8.382) (width 0.25))
            (gr_line (start -1.27 8.382) (end 0 9.652) (width 0.25))
          ) ${p.net.P7.str})
        (pad 15 smd custom (at 8.89 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 1.27 -1.27) (width 0.25))
            (gr_line (start 1.27 -1.27) (end 1.27 -8.382) (width 0.25))
            (gr_line (start 1.27 -8.382) (end 0 -9.652) (width 0.25))
          ) ${p.net.P14.str})
        (pad 14 thru_hole circle (at 11.43 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.P16.str})
        (pad 11 thru_hole circle (at 11.43 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.P8.str})
        (pad 14 smd custom (at 11.43 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 9.906) (width 0.25))
            (gr_line (start -1.27 9.906) (end 0 11.176) (width 0.25))
          ) ${p.net.P16.str})
        (pad 11 smd custom (at 11.43 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 9.906) (width 0.25))
            (gr_line (start -1.27 9.906) (end 0 11.176) (width 0.25))
          ) ${p.net.P8.str})
        (pad 11 smd custom (at 11.43 -0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 8.382) (width 0.25))
            (gr_line (start -1.27 8.382) (end 0 9.652) (width 0.25))
          ) ${p.net.P8.str})
        (pad 14 smd custom (at 11.43 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 1.27 -1.27) (width 0.25))
            (gr_line (start 1.27 -1.27) (end 1.27 -8.382) (width 0.25))
            (gr_line (start 1.27 -8.382) (end 0 -9.652) (width 0.25))
          ) ${p.net.P16.str})
        (pad 13 thru_hole circle (at 13.97 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.P10.str})
        (pad 12 thru_hole circle (at 13.97 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.P9.str})
        (pad 13 smd custom (at 13.97 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 9.906) (width 0.25))
            (gr_line (start -1.27 9.906) (end 0 11.176) (width 0.25))
          ) ${p.net.P10.str})
        (pad 12 smd custom (at 13.97 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 9.906) (width 0.25))
            (gr_line (start -1.27 9.906) (end 0 11.176) (width 0.25))
          ) ${p.net.P9.str})
        (pad 12 smd custom (at 13.97 -0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end -1.27 1.27) (width 0.25))
            (gr_line (start -1.27 1.27) (end -1.27 8.382) (width 0.25))
            (gr_line (start -1.27 8.382) (end 0 9.652) (width 0.25))
          ) ${p.net.P9.str})
        (pad 13 smd custom (at 13.97 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu)
          (zone_connect 0)
          (options (clearance outline) (anchor circle))
          (primitives
            (gr_line (start 0 0) (end 1.27 -1.27) (width 0.25))
            (gr_line (start 1.27 -1.27) (end 1.27 -8.382) (width 0.25))
            (gr_line (start 1.27 -8.382) (end 0 -9.652) (width 0.25))
          ) ${p.net.P10.str})
      )
    `
  }
}
