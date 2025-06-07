// "Maniac" Test — vmbr

let linn = `
[hh hh hh hh] [hh hh hh hh] [hh hh hh hh] [hh hh hh hh],
[- - - -][rim - - -] [- - - -] [rim rim rim -],
[- - - -] [- - - -] [- - - cp*4] [cp cp*4 cp -],
[cb cb*3 cb -] [- - - -] [- - - -] [- - - cb*3],
[- - sd - ] [- - sd -] [- - sd - ] [- - sd -],
[bd - bd - ] [bd - bd - ] [bd - bd -] [bd - bd -]
`;

let sds5 = `
[- - - - ] [- - - ] [- - - -] [- ht mt lt],
[- - sd - ] [- - sd -] [- - sd -] [- - sd sd]
`;

let clap = `
[- - cp - ] [- - cp -] [- - cp -] [- - cp -],
[- - sd - ] [- - sd -] [- - sd -] [- - sd -]
`;

$: stack(
  sound(linn).bank("Linndrum"),
  sound(sds5).bank("SimmonsSDS5"), 
  sound(clap).bank("RolandTR909").gain(1.3)
).cpm(77/4)
