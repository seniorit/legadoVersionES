import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibroPage } from './libro.page';

const routes: Routes = [
  {
    path: '',
    component: LibroPage,
  },
  {
    path: 'cap1',
    loadChildren: () =>
      import('./cap1/cap1.module').then((m) => m.Cap1PageModule),
  },
  {
    path: 'cap2',
    loadChildren: () =>
      import('./cap2/cap2.module').then((m) => m.Cap2PageModule),
  },
  {
    path: 'cap1',
    loadChildren: () =>
      import('./cap1/cap1.module').then((m) => m.Cap1PageModule),
  },
  {
    path: 'cap2',
    loadChildren: () =>
      import('./cap2/cap2.module').then((m) => m.Cap2PageModule),
  },
  {
    path: 'cap3',
    loadChildren: () =>
      import('./cap3/cap3.module').then((m) => m.Cap3PageModule),
  },
  {
    path: 'cap4',
    loadChildren: () =>
      import('./cap4/cap4.module').then((m) => m.Cap4PageModule),
  },
  {
    path: 'cap5',
    loadChildren: () =>
      import('./cap5/cap5.module').then((m) => m.Cap5PageModule),
  },
  {
    path: 'cap6',
    loadChildren: () =>
      import('./cap6/cap6.module').then((m) => m.Cap6PageModule),
  },
  {
    path: 'cap7',
    loadChildren: () =>
      import('./cap7/cap7.module').then((m) => m.Cap7PageModule),
  },
  {
    path: 'cap8',
    loadChildren: () =>
      import('./cap8/cap8.module').then((m) => m.Cap8PageModule),
  },
  {
    path: 'cap9',
    loadChildren: () =>
      import('./cap9/cap9.module').then((m) => m.Cap9PageModule),
  },
  {
    path: 'cap10',
    loadChildren: () =>
      import('./cap10/cap10.module').then((m) => m.Cap10PageModule),
  },
  {
    path: 'cap11',
    loadChildren: () =>
      import('./cap11/cap11.module').then((m) => m.Cap11PageModule),
  },
  {
    path: 'cap12',
    loadChildren: () =>
      import('./cap12/cap12.module').then((m) => m.Cap12PageModule),
  },
  {
    path: 'cap13',
    loadChildren: () =>
      import('./cap13/cap13.module').then((m) => m.Cap13PageModule),
  },
  {
    path: 'cap14',
    loadChildren: () =>
      import('./cap14/cap14.module').then((m) => m.Cap14PageModule),
  },
  {
    path: 'cap15',
    loadChildren: () =>
      import('./cap15/cap15.module').then((m) => m.Cap15PageModule),
  },
  {
    path: 'cap16',
    loadChildren: () =>
      import('./cap16/cap16.module').then((m) => m.Cap16PageModule),
  },
  {
    path: 'cap17',
    loadChildren: () =>
      import('./cap17/cap17.module').then((m) => m.Cap17PageModule),
  },
  {
    path: 'cap18',
    loadChildren: () =>
      import('./cap18/cap18.module').then((m) => m.Cap18PageModule),
  },
  {
    path: 'cap19',
    loadChildren: () =>
      import('./cap19/cap19.module').then((m) => m.Cap19PageModule),
  },
  {
    path: 'cap20',
    loadChildren: () =>
      import('./cap20/cap20.module').then((m) => m.Cap20PageModule),
  },
  {
    path: 'cap21',
    loadChildren: () =>
      import('./cap21/cap21.module').then((m) => m.Cap21PageModule),
  },
  {
    path: 'cap22',
    loadChildren: () =>
      import('./cap22/cap22.module').then((m) => m.Cap22PageModule),
  },
  {
    path: 'cap23',
    loadChildren: () =>
      import('./cap23/cap23.module').then((m) => m.Cap23PageModule),
  },
  {
    path: 'cap24',
    loadChildren: () =>
      import('./cap24/cap24.module').then((m) => m.Cap24PageModule),
  },
  {
    path: 'cap25',
    loadChildren: () =>
      import('./cap25/cap25.module').then((m) => m.Cap25PageModule),
  },
  {
    path: 'cap26',
    loadChildren: () =>
      import('./cap26/cap26.module').then((m) => m.Cap26PageModule),
  },
  {
    path: 'cap27',
    loadChildren: () =>
      import('./cap27/cap27.module').then((m) => m.Cap27PageModule),
  },
  {
    path: 'cap28',
    loadChildren: () =>
      import('./cap28/cap28.module').then((m) => m.Cap28PageModule),
  },
  {
    path: 'cap29',
    loadChildren: () =>
      import('./cap29/cap29.module').then((m) => m.Cap29PageModule),
  },
  {
    path: 'cap30',
    loadChildren: () =>
      import('./cap30/cap30.module').then((m) => m.Cap30PageModule),
  },
  {
    path: 'cap31',
    loadChildren: () =>
      import('./cap31/cap31.module').then((m) => m.Cap31PageModule),
  },
  {
    path: 'cap32',
    loadChildren: () =>
      import('./cap32/cap32.module').then((m) => m.Cap32PageModule),
  },
  {
    path: 'cap33',
    loadChildren: () =>
      import('./cap33/cap33.module').then((m) => m.Cap33PageModule),
  },
  {
    path: 'cap34',
    loadChildren: () =>
      import('./cap34/cap34.module').then((m) => m.Cap34PageModule),
  },
  {
    path: 'cap35',
    loadChildren: () =>
      import('./cap35/cap35.module').then((m) => m.Cap35PageModule),
  },
  {
    path: 'cap36',
    loadChildren: () =>
      import('./cap36/cap36.module').then((m) => m.Cap36PageModule),
  },
  {
    path: 'cap37',
    loadChildren: () =>
      import('./cap37/cap37.module').then((m) => m.Cap37PageModule),
  },
  {
    path: 'cap38',
    loadChildren: () =>
      import('./cap38/cap38.module').then((m) => m.Cap38PageModule),
  },
  {
    path: 'cap39',
    loadChildren: () =>
      import('./cap39/cap39.module').then((m) => m.Cap39PageModule),
  },
  {
    path: 'cap40',
    loadChildren: () =>
      import('./cap40/cap40.module').then((m) => m.Cap40PageModule),
  },
  {
    path: 'cap41',
    loadChildren: () =>
      import('./cap41/cap41.module').then((m) => m.Cap41PageModule),
  },
  {
    path: 'cap42',
    loadChildren: () =>
      import('./cap42/cap42.module').then((m) => m.Cap42PageModule),
  },
  {
    path: 'cap43',
    loadChildren: () =>
      import('./cap43/cap43.module').then((m) => m.Cap43PageModule),
  },
  {
    path: 'cap44',
    loadChildren: () =>
      import('./cap44/cap44.module').then((m) => m.Cap44PageModule),
  },
  {
    path: 'cap45',
    loadChildren: () =>
      import('./cap45/cap45.module').then((m) => m.Cap45PageModule),
  },
  {
    path: 'cap46',
    loadChildren: () =>
      import('./cap46/cap46.module').then((m) => m.Cap46PageModule),
  },
  {
    path: 'cap47',
    loadChildren: () =>
      import('./cap47/cap47.module').then((m) => m.Cap47PageModule),
  },
  {
    path: 'cap48',
    loadChildren: () =>
      import('./cap48/cap48.module').then((m) => m.Cap48PageModule),
  },
  {
    path: 'cap49',
    loadChildren: () =>
      import('./cap49/cap49.module').then((m) => m.Cap49PageModule),
  },
  {
    path: 'cap50',
    loadChildren: () =>
      import('./cap50/cap50.module').then((m) => m.Cap50PageModule),
  },
  {
    path: 'cap51',
    loadChildren: () =>
      import('./cap51/cap51.module').then((m) => m.Cap51PageModule),
  },
  {
    path: 'cap52',
    loadChildren: () =>
      import('./cap52/cap52.module').then((m) => m.Cap52PageModule),
  },
  {
    path: 'cap53',
    loadChildren: () =>
      import('./cap53/cap53.module').then((m) => m.Cap53PageModule),
  },
  {
    path: 'cap54',
    loadChildren: () =>
      import('./cap54/cap54.module').then((m) => m.Cap54PageModule),
  },
  {
    path: 'cap55',
    loadChildren: () =>
      import('./cap55/cap55.module').then((m) => m.Cap55PageModule),
  },
  {
    path: 'cap56',
    loadChildren: () =>
      import('./cap56/cap56.module').then((m) => m.Cap56PageModule),
  },
  {
    path: 'cap57',
    loadChildren: () =>
      import('./cap57/cap57.module').then((m) => m.Cap57PageModule),
  },
  {
    path: 'cap58',
    loadChildren: () =>
      import('./cap58/cap58.module').then((m) => m.Cap58PageModule),
  },
  {
    path: 'cap59',
    loadChildren: () =>
      import('./cap59/cap59.module').then((m) => m.Cap59PageModule),
  },
  {
    path: 'cap60',
    loadChildren: () =>
      import('./cap60/cap60.module').then((m) => m.Cap60PageModule),
  },
  {
    path: 'cap61',
    loadChildren: () =>
      import('./cap61/cap61.module').then((m) => m.Cap61PageModule),
  },
  {
    path: 'cap62',
    loadChildren: () =>
      import('./cap62/cap62.module').then((m) => m.Cap62PageModule),
  },
  {
    path: 'cap63',
    loadChildren: () =>
      import('./cap63a/cap63a.module').then((m) => m.Cap63aPageModule),
  },
  {
    path: 'cap63',
    loadChildren: () =>
      import('./cap63/cap63.module').then((m) => m.Cap63PageModule),
  },
  {
    path: 'cap64',
    loadChildren: () =>
      import('./cap64/cap64.module').then((m) => m.Cap64PageModule),
  },
  {
    path: 'cap65',
    loadChildren: () =>
      import('./cap65/cap65.module').then((m) => m.Cap65PageModule),
  },
  {
    path: 'cap66',
    loadChildren: () =>
      import('./cap66/cap66.module').then((m) => m.Cap66PageModule),
  },
  {
    path: 'cap67',
    loadChildren: () =>
      import('./cap67/cap67.module').then((m) => m.Cap67PageModule),
  },
  {
    path: 'cap68',
    loadChildren: () =>
      import('./cap68/cap68.module').then((m) => m.Cap68PageModule),
  },
  {
    path: 'cap69',
    loadChildren: () =>
      import('./cap69/cap69.module').then((m) => m.Cap69PageModule),
  },
  {
    path: 'cap70',
    loadChildren: () =>
      import('./cap70/cap70.module').then((m) => m.Cap70PageModule),
  },
  {
    path: 'cap71',
    loadChildren: () =>
      import('./cap71/cap71.module').then((m) => m.Cap71PageModule),
  },
  {
    path: 'cap72',
    loadChildren: () =>
      import('./cap72/cap72.module').then((m) => m.Cap72PageModule),
  },
  {
    path: 'cap73',
    loadChildren: () =>
      import('./cap73/cap73.module').then((m) => m.Cap73PageModule),
  },
  {
    path: 'cap74',
    loadChildren: () =>
      import('./cap74/cap74.module').then((m) => m.Cap74PageModule),
  },
  {
    path: 'cap75',
    loadChildren: () =>
      import('./cap75/cap75.module').then((m) => m.Cap75PageModule),
  },
  {
    path: 'cap76',
    loadChildren: () =>
      import('./cap76/cap76.module').then((m) => m.Cap76PageModule),
  },
  {
    path: 'cap77',
    loadChildren: () =>
      import('./cap77/cap77.module').then((m) => m.Cap77PageModule),
  },
  {
    path: 'cap78',
    loadChildren: () =>
      import('./cap78/cap78.module').then((m) => m.Cap78PageModule),
  },
  {
    path: 'cap79',
    loadChildren: () =>
      import('./cap79/cap79.module').then((m) => m.Cap79PageModule),
  },
  {
    path: 'cap80',
    loadChildren: () =>
      import('./cap80/cap80.module').then((m) => m.Cap80PageModule),
  },
  {
    path: 'cap81',
    loadChildren: () =>
      import('./cap81/cap81.module').then((m) => m.Cap81PageModule),
  },
  {
    path: 'cap82',
    loadChildren: () =>
      import('./cap82/cap82.module').then((m) => m.Cap82PageModule),
  },
  {
    path: 'cap83',
    loadChildren: () =>
      import('./cap83/cap83.module').then((m) => m.Cap83PageModule),
  },
  {
    path: 'cap84',
    loadChildren: () =>
      import('./cap84/cap84.module').then((m) => m.Cap84PageModule),
  },
  {
    path: 'cap85',
    loadChildren: () =>
      import('./cap85/cap85.module').then((m) => m.Cap85PageModule),
  },
  {
    path: 'cap86',
    loadChildren: () =>
      import('./cap86/cap86.module').then((m) => m.Cap86PageModule),
  },
  {
    path: 'cap87',
    loadChildren: () =>
      import('./cap87/cap87.module').then((m) => m.Cap87PageModule),
  },
  {
    path: 'cap88',
    loadChildren: () =>
      import('./cap88/cap88.module').then((m) => m.Cap88PageModule),
  },
  {
    path: 'cap89',
    loadChildren: () =>
      import('./cap89/cap89.module').then((m) => m.Cap89PageModule),
  },
  {
    path: 'cap90',
    loadChildren: () =>
      import('./cap90/cap90.module').then((m) => m.Cap90PageModule),
  },
  {
    path: 'cap91',
    loadChildren: () =>
      import('./cap91/cap91.module').then((m) => m.Cap91PageModule),
  },
  {
    path: 'cap92',
    loadChildren: () =>
      import('./cap92/cap92.module').then((m) => m.Cap92PageModule),
  },
  {
    path: 'cap93',
    loadChildren: () =>
      import('./cap93/cap93.module').then((m) => m.Cap93PageModule),
  },
  {
    path: 'cap94',
    loadChildren: () =>
      import('./cap94/cap94.module').then((m) => m.Cap94PageModule),
  },
  {
    path: 'cap95',
    loadChildren: () =>
      import('./cap95/cap95.module').then((m) => m.Cap95PageModule),
  },
  {
    path: 'cap96',
    loadChildren: () =>
      import('./cap96/cap96.module').then((m) => m.Cap96PageModule),
  },
  {
    path: 'cap97',
    loadChildren: () =>
      import('./cap97/cap97.module').then((m) => m.Cap97PageModule),
  },
  {
    path: 'cap98',
    loadChildren: () =>
      import('./cap98/cap98.module').then((m) => m.Cap98PageModule),
  },
  {
    path: 'cap99',
    loadChildren: () =>
      import('./cap99/cap99.module').then((m) => m.Cap99PageModule),
  },
  {
    path: 'cap100',
    loadChildren: () =>
      import('./cap100/cap100.module').then((m) => m.Cap100PageModule),
  },
  {
    path: 'cap101',
    loadChildren: () =>
      import('./cap101/cap101.module').then((m) => m.Cap101PageModule),
  },
  {
    path: 'cap102',
    loadChildren: () =>
      import('./cap102/cap102.module').then((m) => m.Cap102PageModule),
  },
  {
    path: 'cap103',
    loadChildren: () =>
      import('./cap103/cap103.module').then((m) => m.Cap103PageModule),
  },
  {
    path: 'cap104',
    loadChildren: () =>
      import('./cap104/cap104.module').then((m) => m.Cap104PageModule),
  },
  {
    path: 'cap105',
    loadChildren: () =>
      import('./cap105/cap105.module').then((m) => m.Cap105PageModule),
  },
  {
    path: 'cap106',
    loadChildren: () =>
      import('./cap106/cap106.module').then((m) => m.Cap106PageModule),
  },
  {
    path: 'cap107',
    loadChildren: () =>
      import('./cap107/cap107.module').then((m) => m.Cap107PageModule),
  },
  {
    path: 'cap108',
    loadChildren: () =>
      import('./cap108/cap108.module').then((m) => m.Cap108PageModule),
  },
  {
    path: 'cap109',
    loadChildren: () =>
      import('./cap109/cap109.module').then((m) => m.Cap109PageModule),
  },
  {
    path: 'cap110',
    loadChildren: () =>
      import('./cap110/cap110.module').then((m) => m.Cap110PageModule),
  },
  {
    path: 'cap111',
    loadChildren: () =>
      import('./cap111/cap111.module').then((m) => m.Cap111PageModule),
  },
  {
    path: 'cap112',
    loadChildren: () =>
      import('./cap112/cap112.module').then((m) => m.Cap112PageModule),
  },
  {
    path: 'cap113',
    loadChildren: () =>
      import('./cap113/cap113.module').then((m) => m.Cap113PageModule),
  },
  {
    path: 'cap114',
    loadChildren: () =>
      import('./cap114/cap114.module').then((m) => m.Cap114PageModule),
  },
  {
    path: 'cap115',
    loadChildren: () =>
      import('./cap115/cap115.module').then((m) => m.Cap115PageModule),
  },
  {
    path: 'cap116',
    loadChildren: () =>
      import('./cap116/cap116.module').then((m) => m.Cap116PageModule),
  },
  {
    path: 'cap117',
    loadChildren: () =>
      import('./cap117/cap117.module').then((m) => m.Cap117PageModule),
  },
  {
    path: 'cap118',
    loadChildren: () =>
      import('./cap118/cap118.module').then((m) => m.Cap118PageModule),
  },
  {
    path: 'cap119',
    loadChildren: () =>
      import('./cap119/cap119.module').then((m) => m.Cap119PageModule),
  },
  {
    path: 'cap120',
    loadChildren: () =>
      import('./cap120/cap120.module').then((m) => m.Cap120PageModule),
  },
  {
    path: 'cap121',
    loadChildren: () =>
      import('./cap121/cap121.module').then((m) => m.Cap121PageModule),
  },
  {
    path: 'cap122',
    loadChildren: () =>
      import('./cap122/cap122.module').then((m) => m.Cap122PageModule),
  },
  {
    path: 'cap123',
    loadChildren: () =>
      import('./cap123/cap123.module').then((m) => m.Cap123PageModule),
  },
  {
    path: 'cap124',
    loadChildren: () =>
      import('./cap124/cap124.module').then((m) => m.Cap124PageModule),
  },
  {
    path: 'cap125',
    loadChildren: () =>
      import('./cap125/cap125.module').then((m) => m.Cap125PageModule),
  },
  {
    path: 'cap126',
    loadChildren: () =>
      import('./cap126/cap126.module').then((m) => m.Cap126PageModule),
  },
  {
    path: 'cap127',
    loadChildren: () =>
      import('./cap127/cap127.module').then((m) => m.Cap127PageModule),
  },
  {
    path: 'cap128',
    loadChildren: () =>
      import('./cap128/cap128.module').then((m) => m.Cap128PageModule),
  },
  {
    path: 'cap129',
    loadChildren: () =>
      import('./cap129/cap129.module').then((m) => m.Cap129PageModule),
  },
  {
    path: 'cap130',
    loadChildren: () =>
      import('./cap130/cap130.module').then((m) => m.Cap130PageModule),
  },
  {
    path: 'cap131',
    loadChildren: () =>
      import('./cap131/cap131.module').then((m) => m.Cap131PageModule),
  },
  {
    path: 'cap132',
    loadChildren: () =>
      import('./cap132/cap132.module').then((m) => m.Cap132PageModule),
  },
  {
    path: 'cap133',
    loadChildren: () =>
      import('./cap133/cap133.module').then((m) => m.Cap133PageModule),
  },
  {
    path: 'cap134',
    loadChildren: () =>
      import('./cap134/cap134.module').then((m) => m.Cap134PageModule),
  },
  {
    path: 'cap135',
    loadChildren: () =>
      import('./cap135/cap135.module').then((m) => m.Cap135PageModule),
  },
  {
    path: 'cap136',
    loadChildren: () =>
      import('./cap136/cap136.module').then((m) => m.Cap136PageModule),
  },
  {
    path: 'cap137',
    loadChildren: () =>
      import('./cap137/cap137.module').then((m) => m.Cap137PageModule),
  },
  {
    path: 'cap138',
    loadChildren: () =>
      import('./cap138/cap138.module').then((m) => m.Cap138PageModule),
  },
  {
    path: 'cap139',
    loadChildren: () =>
      import('./cap139/cap139.module').then((m) => m.Cap139PageModule),
  },
  {
    path: 'cap140',
    loadChildren: () =>
      import('./cap140/cap140.module').then((m) => m.Cap140PageModule),
  },
  {
    path: 'cap141',
    loadChildren: () =>
      import('./cap141/cap141.module').then((m) => m.Cap141PageModule),
  },
  {
    path: 'cap142',
    loadChildren: () =>
      import('./cap142/cap142.module').then((m) => m.Cap142PageModule),
  },
  {
    path: 'cap143',
    loadChildren: () =>
      import('./cap143/cap143.module').then((m) => m.Cap143PageModule),
  },
  {
    path: 'cap144',
    loadChildren: () =>
      import('./cap144/cap144.module').then((m) => m.Cap144PageModule),
  },
  {
    path: 'cap145',
    loadChildren: () =>
      import('./cap145/cap145.module').then((m) => m.Cap145PageModule),
  },
  {
    path: 'cap146',
    loadChildren: () =>
      import('./cap146/cap146.module').then((m) => m.Cap146PageModule),
  },
  {
    path: 'cap147',
    loadChildren: () =>
      import('./cap147/cap147.module').then((m) => m.Cap147PageModule),
  },
  {
    path: 'cap148',
    loadChildren: () =>
      import('./cap148/cap148.module').then((m) => m.Cap148PageModule),
  },
  {
    path: 'cap149',
    loadChildren: () =>
      import('./cap149/cap149.module').then((m) => m.Cap149PageModule),
  },
  {
    path: 'cap150',
    loadChildren: () =>
      import('./cap150/cap150.module').then((m) => m.Cap150PageModule),
  },
  {
    path: 'cap151',
    loadChildren: () =>
      import('./cap151/cap151.module').then((m) => m.Cap151PageModule),
  },
  {
    path: 'cap152',
    loadChildren: () =>
      import('./cap152/cap152.module').then((m) => m.Cap152PageModule),
  },
  {
    path: 'cap153',
    loadChildren: () =>
      import('./cap153/cap153.module').then((m) => m.Cap153PageModule),
  },
  {
    path: 'cap154',
    loadChildren: () =>
      import('./cap154/cap154.module').then((m) => m.Cap154PageModule),
  },
  {
    path: 'cap155',
    loadChildren: () =>
      import('./cap155/cap155.module').then((m) => m.Cap155PageModule),
  },
  {
    path: 'cap156',
    loadChildren: () =>
      import('./cap156/cap156.module').then((m) => m.Cap156PageModule),
  },
  {
    path: 'cap157',
    loadChildren: () =>
      import('./cap157/cap157.module').then((m) => m.Cap157PageModule),
  },
  {
    path: 'cap158',
    loadChildren: () =>
      import('./cap158/cap158.module').then((m) => m.Cap158PageModule),
  },
  {
    path: 'cap159',
    loadChildren: () =>
      import('./cap159/cap159.module').then((m) => m.Cap159PageModule),
  },
  {
    path: 'cap160',
    loadChildren: () =>
      import('./cap160/cap160.module').then((m) => m.Cap160PageModule),
  },
  {
    path: 'cap161',
    loadChildren: () =>
      import('./cap161/cap161.module').then((m) => m.Cap161PageModule),
  },
  {
    path: 'cap162',
    loadChildren: () =>
      import('./cap162/cap162.module').then((m) => m.Cap162PageModule),
  },
  {
    path: 'cap163',
    loadChildren: () =>
      import('./cap163/cap163.module').then((m) => m.Cap163PageModule),
  },
  {
    path: 'cap164',
    loadChildren: () =>
      import('./cap164/cap164.module').then((m) => m.Cap164PageModule),
  },
  {
    path: 'cap165',
    loadChildren: () =>
      import('./cap165/cap165.module').then((m) => m.Cap165PageModule),
  },
  {
    path: 'cap166',
    loadChildren: () =>
      import('./cap166/cap166.module').then((m) => m.Cap166PageModule),
  },
  {
    path: 'cap167',
    loadChildren: () =>
      import('./cap167/cap167.module').then((m) => m.Cap167PageModule),
  },
  {
    path: 'cap168',
    loadChildren: () =>
      import('./cap168/cap168.module').then((m) => m.Cap168PageModule),
  },
  {
    path: 'cap169',
    loadChildren: () =>
      import('./cap169/cap169.module').then((m) => m.Cap169PageModule),
  },
  {
    path: 'cap170',
    loadChildren: () =>
      import('./cap170/cap170.module').then((m) => m.Cap170PageModule),
  },
  {
    path: 'cap171',
    loadChildren: () =>
      import('./cap171/cap171.module').then((m) => m.Cap171PageModule),
  },
  {
    path: 'cap172',
    loadChildren: () =>
      import('./cap172/cap172.module').then((m) => m.Cap172PageModule),
  },
  {
    path: 'cap173',
    loadChildren: () =>
      import('./cap173/cap173.module').then((m) => m.Cap173PageModule),
  },
  {
    path: 'cap174',
    loadChildren: () =>
      import('./cap174/cap174.module').then((m) => m.Cap174PageModule),
  },
  {
    path: 'cap175',
    loadChildren: () =>
      import('./cap175/cap175.module').then((m) => m.Cap175PageModule),
  },
  {
    path: 'cap176',
    loadChildren: () =>
      import('./cap176/cap176.module').then((m) => m.Cap176PageModule),
  },
  {
    path: 'cap177',
    loadChildren: () =>
      import('./cap177/cap177.module').then((m) => m.Cap177PageModule),
  },
  {
    path: 'cap178',
    loadChildren: () =>
      import('./cap178/cap178.module').then((m) => m.Cap178PageModule),
  },
  {
    path: 'cap179',
    loadChildren: () =>
      import('./cap179/cap179.module').then((m) => m.Cap179PageModule),
  },
  {
    path: 'cap180',
    loadChildren: () =>
      import('./cap180/cap180.module').then((m) => m.Cap180PageModule),
  },
  {
    path: 'cap181',
    loadChildren: () =>
      import('./cap181/cap181.module').then((m) => m.Cap181PageModule),
  },
  {
    path: 'cap182',
    loadChildren: () =>
      import('./cap182/cap182.module').then((m) => m.Cap182PageModule),
  },
  {
    path: 'cap183',
    loadChildren: () =>
      import('./cap183/cap183.module').then((m) => m.Cap183PageModule),
  },
  {
    path: 'cap184',
    loadChildren: () =>
      import('./cap184/cap184.module').then((m) => m.Cap184PageModule),
  },
  {
    path: 'cap185',
    loadChildren: () =>
      import('./cap185/cap185.module').then((m) => m.Cap185PageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibroPageRoutingModule {}
