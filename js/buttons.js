
function ButtonTable(ShowWhich) {
// All Button ID's up to the last one must be used
// 1-5 used in NeedsList; 1-8 used in other pages
// id="P1"	Hide
// id="P2"	Card Set
// id="P3"	Empire
// id="P4"	Needs
// id="P5"	Distributor
// id="P6"	Weapons
// id="P7"	Artist
// id="P8"	Point Use
var n=", \'Nul\'"
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

	var someText='<div class="buttonbox" id="header">';
				someText += '<button id="B1" class="booklist" style="top:0px"><p class="nomargin"><b><span id="TB1">Hide</span> Buttons<span id="SB1" style="float:right;">&nbsp;+&nbsp;&nbsp;</span></b></p> </button> ';
				someText += '<div class="panel" id="P1"></div>';
					someText += '<button id="B2" class="booklist"><p class="nomargin"><b>Cards by Set / Type / Rarity / Strength<span id="SB2" style="float:right;">&nbsp;+&nbsp;&nbsp;</span></b></p> </button> ';
						someText += '<div class="panel" id="P2">';
								someText += '<table border="0" cellpadding="1" cellspacing="1" width="100%">';
									someText += '<tr>';
										someText += '<td valign="top">';
											someText += '<p class="black stacked">';
												someText += '<span style="background-color: Black">';
													someText += 'You can select multiple sets to display cards that belong to any of the selected sets.';
												someText += '</span>';
											someText += '</p>';
										someText += '</td>';
									someText += '</tr>';
								someText += '<tr>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';

			if (ShowWhich == "Gallery") {
										someText += '<button title="Reset Card Edition filter" class="maincardedition"											onclick="filterByType(xFilterByType, \'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Show All Cards</u></b> </button> ';
											someText += '<button title="Show Only Most Recent Printing" class="maincardedition activecardedition"				onclick="filterByType(xFilterByType, \'LatestPrint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Show Only Most Recent Printing</u></b> </button> ';
									} else if (ShowWhich == "CardList" || ShowWhich == "NeedsList" || ShowWhich == "HavesList") {
											someText += '<button title="Reset Card Edition filter" class="maincardedition activecardedition"					onclick="filterByType(xFilterByType, \'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Show All Cards</u></b> </button> ';
											someText += '<button title="Show Only Most Recent Printing" class="maincardedition" 								onclick="filterByType(xFilterByType, \'LatestPrint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Show Only Most Recent Printing</u></b> </button> ';
									}
											someText += '&nbsp;';
											someText += '<button title="Show no promotional cards"   class="maincardedition"									onclick="filterByType(xFilterByType, \'Nopromo\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> No Promo Cards </button> ';
											someText += '<button title="Show only promotional cards" class="maincardedition"									onclick="filterByType(xFilterByType, \'Promo\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Promo Cards Only </button> ';
											someText += '<button title="Hide Alpha/Beta/German Gold Border" class="btncardedition"								onclick="filterByType(xFilterByType, \'NotABG\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Hide Alpha/Beta </button> ';
											someText += '&nbsp;';
											someText += '<button title="Alpha Edition - Series I - 8/94" class="btncardedition"									onclick="filterByType(xFilterByType, \'[AL]\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Alpha </button> ';
											someText += '<button title="Beta Edition - Series I - 8/94" class="btncardedition"									onclick="filterByType(xFilterByType, \'[BE]\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Beta </button> ';
											someText += '<button title="Primary Edition - Series II - 12/94" class="btncardedition"								onclick="filterByType(xFilterByType, \'[PE]\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Primary Edition </button> ';
											someText += '<button title="New Empires - Series III - 3/95" class="btncardedition"									onclick="filterByType(xFilterByType, \'[NE]\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> New Empires </button> ';
											someText += '<button title="Powers of the Mind - Series IV - 3/95" class="btncardedition"							onclick="filterByType(xFilterByType, \'[PoM]\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Powers of the Mind </button> ';
											someText += '<button title="Time Gates - Series V - 3/95" class="btncardedition"									onclick="filterByType(xFilterByType, \'[TG]\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Time Gates </button> ';
											someText += '<button title="Universe Edition - Series U - 11/95" class="btncardedition"								onclick="filterByType(xFilterByType, \'[UE]\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Universe Edition </button> ';
											someText += '<button title="Advanced Technologies - Series VI - 1/96" class="btncardedition"						onclick="filterByType(xFilterByType, \'[AT]\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Advanced Technologies </button> ';
											someText += '<button title="Piracy - Series VII - 5/96" class="btncardedition"										onclick="filterByType(xFilterByType, \'[Pir]\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Piracy </button> ';
											someText += '<button title="Comedy Club on the Far Side of the Galaxy - Series VIII - 7/96" class="btncardedition"	onclick="filterByType(xFilterByType, \'[CC]\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Comedy Club on the Far Side of the Galaxy </button> ';
											someText += '<button title="Persona - Series IX - 8/96" class="btncardedition"										onclick="filterByType(xFilterByType, \'[Per]\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Persona </button> ';
											someText += '<button title="Galactic Invaders - Series X - 10/96" class="btncardedition"							onclick="filterByType(xFilterByType, \'[GI]\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Galactic Invaders </button> ';
											someText += '<button title="Allied Forces - Series XI - 12/96" class="btncardedition"								onclick="filterByType(xFilterByType, \'[AF]\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Allied Forces </button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<button title="Reset Card Edition filter" class="maincardedition"										onclick="filterByType(xFilterByType, \'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Show All Cards</u></b> </button> ';
											someText += '<button title="All promotional cards" class="btncardedition"											onclick="filterByType(xFilterByType, \'[Pro\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> All Promo Sets </button> ';
											someText += '<button title="Initial promotional cards" class="btncardedition"										onclick="filterByType(xFilterByType, \'[Pro0]\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Promo Set 0 </button> ';
											someText += '<button title="First Promotional run" class="btncardedition"											onclick="filterByType(xFilterByType, \'[Pro1]\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Promo Set 1 </button> ';
											someText += '<button title="Second Promotional run" class="btncardedition"											onclick="filterByType(xFilterByType, \'[Pro2]\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Promo Set 2 </button> ';
											someText += '<button title="Third promotional run" class="btncardedition"											onclick="filterByType(xFilterByType, \'[Pro3]\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Promo Set 3 </button> ';
											someText += '<button title="Fourth promotional run" class="btncardedition"											onclick="filterByType(xFilterByType, \'[Pro4]\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Promo Set 4 </button> ';
											someText += '<button title="Fifth promotional run" class="btncardedition"											onclick="filterByType(xFilterByType, \'[Pro5]\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Promo Set 5 </button> ';
											someText += '<button title="Sixth Promotional run" class="btncardedition"											onclick="filterByType(xFilterByType, \'[Pro6]\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Promo Set 6 </button> ';
											someText += '<button title="Indirigan Touring Game Promotional cards" class="btncardedition"						onclick="filterByType(xFilterByType, \'[Pro7]\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Promo Set 7 (Indirigan Touring Game) </button> ';
											someText += '<button title="Online Exclusives by Eric B. Smith" class="btncardedition"								onclick="filterByType(xFilterByType, \'[Pro8]\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Promo Set 8 (Online Exclusives) </button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
								someText += '</tr>';
							someText += '</table>';
							someText += '<table border="0" cellpadding="1" cellspacing="1" width="100%">';
								someText += '<tr>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
										someText += '<button title="Reset Card Types filter" class="btncardtype activecardtype"									onclick="filterByType(xFilterByType"+n+",	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>All Types</b></u> </button> ';
										someText += '&nbsp;';
										someText += '<button title="Ability Cards" class="btncardtype" 															onclick="filterByType(xFilterByType"+n+",	\'typeAbility\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>A</u></b>bility </button> ';
										someText += '<button title="Base Cards" class="btncardtype"																onclick="filterByType(xFilterByType"+n+",	\'typeBase\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>B</u></b>ase </button> ';
										someText += '<button title="Crew Cards" class="btncardtype"																onclick="filterByType(xFilterByType"+n+",	\'typeCrew\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>C</u></b>rew </button> ';
										someText += '<button title="Dragon Cards" class="btncardtype"  															onclick="filterByType(xFilterByType"+n+",	\'typeDragon\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>D</u></b>ragon </button> ';
										someText += '<button title="Equipment Cards" class="btncardtype"   														onclick="filterByType(xFilterByType"+n+",	\'typeEquipment\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>E</u></b>quipment </button> ';
										someText += '<button title="Field Cards" class="btncardtype"   															onclick="filterByType(xFilterByType"+n+",	\'typeField\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>F</u></b>ield </button> ';
										someText += '<button title="Agenda Cards" class="btncardtype"  															onclick="filterByType(xFilterByType"+n+",	\'typeaGenda\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> a<b><u>G</u></b>enda </button> ';
										someText += '<button title="Hazard Cards" class="btncardtype"  															onclick="filterByType(xFilterByType"+n+",	\'typeHazard\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>H</u></b>azard </button> ';
										someText += '<button title="Installation Cards" class="btncardtype"														onclick="filterByType(xFilterByType"+n+",	\'typeInstallation\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>I</u></b>nstallation </button> ';
										someText += '<button title="Luck Cards" class="btncardtype"																onclick="filterByType(xFilterByType"+n+",	\'typeLuck\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>L</u></b>uck </button> ';
										someText += '<button title="Monster Cards" class="btncardtype" 															onclick="filterByType(xFilterByType"+n+",	\'typeMonster\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>M</u></b>onster </button> ';
										someText += '<button title="Ancients Card" class="btncardtype" 															onclick="filterByType(xFilterByType"+n+",	\'typeaNcient\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> a<b><u>N</u></b>cient </button> ';
										someText += '<button title="Occurence Cards" class="btncardtype"   														onclick="filterByType(xFilterByType"+n+",	\'typeOccurence\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>O</u></b>ccurence </button> ';
										someText += '<button title="Psy Cards" class="btncardtype" 																onclick="filterByType(xFilterByType"+n+",	\'typePsy\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>P</u></b>sy </button> ';
										someText += '<button title="Headquarters Cards" class="btncardtype"														onclick="filterByType(xFilterByType"+n+",	\'typeheadQuarters\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> head<b><u>Q</u></b>uarters </button> ';
										someText += '<button title="Ship Cards" class="btncardtype"																onclick="filterByType(xFilterByType"+n+",	\'typeShip\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>S</u></b>hips </button> ';
										someText += '<button title="Terrain Cards" class="btncardtype" 															onclick="filterByType(xFilterByType"+n+",	\'typeTerrain\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>T</u></b>errain </button> ';
										someText += '<button title="Sector HQ Cards" class="btncardtype"   														onclick="filterByType(xFilterByType"+n+",	\'typeSectorHQ\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Sector HQs </button> ';
										someText += '<button title="Special/Other Cards" class="btncardtype"   													onclick="filterByType(xFilterByType"+n+",	\'typeSpcl\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Other/Special </button> ';
										someText += '<button title="Boxes, Boosters, etc." class="btncardtype" 													onclick="filterByType(xFilterByType"+n+",	\'typeBox\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Boxes/Boosters </button> ';
										someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
										if (isFirefox==false) {
											someText += '<button title="Reset Reprinted Cards filter"         class="btnduplicate"					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'XYXYXYXYXYXYXY\',	\'\')"> <b><u>Hide All Cards</b></u> </button> ';
										};
											someText += '<button title="Reset Reprinted Cards filter"         class="btnduplicate activeduplicate"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'\',       		\'\')"> <b><u>All Cards</b></u> </button> ';
											someText += '<button title="Hide Duplicate Cards"                 class="btnduplicate"					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Unique\',			\'\')"> Hide Duplicates </button> ';
											someText += '<button title="Hide Reprinted Cards"                 class="btnduplicate"					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'\',       		\'LatestPrint\')"> Hide Reprinted Cards </button> ';
											someText += '<button title="Hide Duplicates and Reprinted Cards"  class="btnduplicate"					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Unique\',			\'LatestPrint\')"> Hide Dupes &amp; Reprints </button> ';
											someText += '<button title="Show only Primary Edition Duplicates" class="btnduplicate"					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PEdupe\',			\'\')"> Show PE Dupes </button> ';
											someText += '<button title="Show only cards with Errata"          class="btnduplicate"					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Errata\',			\'\')"> Errata </button> ';
											someText += '<button title="Show only cards with Q&A Entries"          class="btnduplicate"				onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Q&amp;A\',		\'\')"> Q&amp;A </button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<button title="Reset Strength filter" class="mainstrength activestrength"	onclick="filterByType(xFilterByType"+n+""+n+""+n+",	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>All Strengths</b></u> </button> ';
											someText += '&nbsp;';
											someText += '<button title="Strength 1 Cards" class="btnstrength"	onclick="filterByType(xFilterByType"+n+""+n+""+n+",	\'STR01\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> 1 </button> ';
											someText += '<button title="Strength 2 Cards" class="btnstrength"	onclick="filterByType(xFilterByType"+n+""+n+""+n+",	\'STR02\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> 2 </button> ';
											someText += '<button title="Strength 3 Cards" class="btnstrength"	onclick="filterByType(xFilterByType"+n+""+n+""+n+",	\'STR03\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> 3 </button> ';
											someText += '<button title="Strength 4 Cards" class="btnstrength"	onclick="filterByType(xFilterByType"+n+""+n+""+n+",	\'STR04\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> 4 </button> ';
											someText += '<button title="Strength 5 Cards" class="btnstrength"	onclick="filterByType(xFilterByType"+n+""+n+""+n+",	\'STR05\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> 5 </button> ';
											someText += '<button title="Strength 6 Cards" class="btnstrength"	onclick="filterByType(xFilterByType"+n+""+n+""+n+",	\'STR06\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> 6 </button> ';
											someText += '<button title="Strength 7 Cards" class="btnstrength"	onclick="filterByType(xFilterByType"+n+""+n+""+n+",	\'STR07\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> 7 </button> ';
											someText += '<button title="Strength 8 Cards" class="btnstrength"	onclick="filterByType(xFilterByType"+n+""+n+""+n+",	\'STR08\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> 8 </button> ';
											someText += '<button title="Strength 9 Cards" class="btnstrength"	onclick="filterByType(xFilterByType"+n+""+n+""+n+",	\'STR09\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> 9 </button> ';
											someText += '<button title="Strength 10 Cards" class="btnstrength"	onclick="filterByType(xFilterByType"+n+""+n+""+n+",	\'STR10\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> 10 </button> ';
											someText += '<button title="Strength 25 HQ Cards" class="btnstrength"	onclick="filterByType(xFilterByType"+n+""+n+""+n+",	\'STR25\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> HQ25 </button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
								someText += '</tr>';
							someText += '</table>';
							someText += '<table border="0" cellpadding="1" cellspacing="1" width="100%">';
								someText += '<tr>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<button title="Reset Reaction Cards filter" class="btnreaction activereaction"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+",	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Reset Reaction Cards</u></b> </button> ';
											someText += '&nbsp;';
											someText += '<button title="Only Show Non-Reaction Cards" class="btnreaction"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+",	\'Nonreaction\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Non-Reaction Cards </button> ';
											someText += '<button title="Only Show Reaction Cards" class="btnreaction"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+",	\'Reaction\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Reaction Cards </button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<button title="Reset Rarity filter" class="mainrarity activerarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>All Rarities</b></u> </button> ';
											someText += '&nbsp;';
											someText += '<button title="Very Common" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'Verycommon\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Very Common </button> ';
											someText += '<button title="Common and Very Common Cards" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'Common\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Common </button> ';
											someText += '<button title="Common Cards from Primary Deck A" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'CommonA\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> CA </button> ';
											someText += '<button title="Common Cards from Primary Deck B" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'CommonB\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> CB </button> ';
											someText += '<button title="Common Cards from Primary Deck A & B" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'Common_AB\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> CAB </button> ';
											someText += '<button title="Common 0 Universe Edition" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'Common0\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> C0 </button> ';
											someText += '<button title="Common 2 Universe Edition Terrain" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'Common2\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> C2 </button> ';
											someText += '<button title="Uncommon Cards" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'Uncommon\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Uncommon </button> ';
											someText += '<button title="Uncommon 0 - Univese Edition Cards that are not U2, U3, or U4" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'Uncommon0\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> U0 </button> ';
											someText += '<button title="Uncommon 2 - Universe Edition Terrain" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'Uncommon2\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> U2 </button> ';
											someText += '<button title="Uncommon 3 - Universe Edition Clydon, P.O.T., Scorpead, Tufor, and Vektrean Cards" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'Uncommon3\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> U3 </button> ';
											someText += '<button title="Uncommon 4 - Universe Edition Argonian, Corporate, Krebiz, and Mechad" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'Uncommon4\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> U4 </button> ';
											someText += '<button title="Rare Cards" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'Rare\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Rare </button> ';
											someText += '<button title="Rare 0 - Univese Edition Cards that are not R2, R3, or R4" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'Rare0\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> R0 </button> ';
											someText += '<button title="Rare 1 - Time Gates cards which are twice as Rare as other Rare" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'Rare1\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> R1 </button> ';
											someText += '<button title="Rare 2 - Universe Edition Terrain" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'Rare2\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> R2 </button> ';
											someText += '<button title="Rare 3 - Universe Edition Clydon, P.O.T., Scorpead, Tufor, and Vektrean Cards" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'Rare3\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> R3 </button> ';
											someText += '<button title="Rare 4 - Universe Edition Argonia, Corporate, Krebiz, Mechad, and Space Dragon Cards" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'Rare4\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> R4 </button> ';
											someText += '<button title="Very Rare Cards" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'Veryrare\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Very Rare </button> ';
											someText += '<button title="Very Rare 0 - Univese Edition Cards that are not V3 or V4" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'Veryrare0\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> V0 </button> ';
											someText += '<button title="Very Rare 1 - Primary Edition Cards from Group 1; possibly more common than Group 2 Cards" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'Veryrare1\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> V1 </button> ';
											someText += '<button title="Very Rare 2 - Primary Edition Cards from Gruop 2; possibly more rare than Group 1 Cards" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'Veryrare2\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> V2 </button> ';
											someText += '<button title="Very Rare 3 - Universe Edition Clydon, P.O.T., Scorpead, Tufor, and Vektrean Cards" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'Veryrare3\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> V3 </button> ';
											someText += '<button title="Very Rare 4 - Universe Edition Argonia, Corporate, Krebiz, Mechad, and Space Dragon Cards" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'Veryrare4\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> V4 </button> ';
											someText += '<button title="Entity (Strength 10) Cards" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'Entity\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Entity </button> ';
											someText += '<button title="Promotional Cards" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'Promo\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Promo </button> ';
											someText += '<button title="Other N/A Cards" class="btnrarity"	onclick="filterByType(xFilterByType"+n+""+n+",	\'N/A\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> N/A </button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
								someText += '</tr>';
							someText += '</table>';
						someText += '</div>';
					someText += '<button id="B3" class="booklist"><p class="nomargin"><b>Cards by Empire<span id="SB3" style="float:right;">&nbsp;+&nbsp;&nbsp;</span></b></p> </button> ';
						someText += '<div class="panel" id="P3" style="top:0px";>';
								someText += '<table border="0" cellpadding="1" cellspacing="1" width="100%">';
									someText += '<tr>';
										someText += '<td valign="top">';
											someText += '<p class="black stacked">';
												someText += '<span style="background-color: Black">';
													someText += 'You can select multiple Empires to display cards that belong to any of the selected Empires.';
												someText += '</span>';
											someText += '</p>';
										someText += '</td>';
									someText += '</tr>';
									someText += '<tr>';
										someText += '<td valign="top">';
											someText += '<p class="buttontext">';
												someText += '<button title="Reset Empires filter" class="mainempire activeempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'\',	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Reset Empire Filter</u></b> </button> ';
												someText += '&nbsp;';
												someText += '<button title="Generic Ships and Crew (w/blue background)" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Generic\',	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Generic Ships </button> ';
												someText += '<button title="All Major Empire Cards"                     class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'MajorEmpire\',	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> All Major Empire Cards </button> ';
												someText += '<button title="All Minor Empire Cards"                     class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'MinorEmpire\',	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> All Minor Empire Cards </button> ';
												someText += '<button title="All Allied Empire Cards"                    class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'AlliedEmpire\',	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> All Allied Empire Cards </button> ';
												someText += '&nbsp;';
												someText += '<button title="All Non-Empire Cards"                       class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Nonempire\',	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> All Non-Empire Cards </button> ';
												someText += '&nbsp;';
											someText += '</p>';
										someText += '</td>';
									someText += '</tr>';
								someText += '</table>';
					someText += '<table border="0" cellpadding="1" cellspacing="1" width="100%">';
						someText += '<tr>';
							someText += '<td valign="top">';
											someText += '<p class="buttontext">';
												someText += '<span style="background-color: black">&nbsp;<b>Major Empires:</b></span><br>';
												someText += '<button title="Aqaaran Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Aqaaran\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Aqaaran </button> ';
												someText += '<button title="Argonian Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Argonian\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Argonian </button> ';
												someText += '<button title="Clydon Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Clydon\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Clydon </button> ';
												someText += '<button title="Comedy Club Network Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'ComedyClub\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Comedy Club Network </button> ';
												someText += '<button title="Corporate Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Corporate\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Corporate </button> ';
												someText += '<button title="Filarian Infester Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Filarian\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Filarian Infester </button> ';
												someText += '<button title="Gekonauak Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Gekonauak\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Gekonauak </button> ';
												someText += '<button title="J\'xar Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Jxar\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> J\'xar </button> ';
												someText += '<button title="Krebiz Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Krebiz\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Krebiz </button> ';
												someText += '<button title="Leopan Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Leopan\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Leopan </button> ';
												someText += '<button title="Mechad Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Mechad\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Mechad </button> ';
												someText += '<button title="P.O.T. Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'POT\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> P.O.T. </button> ';
												someText += '<button title="P.O.T. Centaurian Element Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Centaurian\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> P.O.T. Centaurian</button> ';
												someText += '<button title="P.O.T. Peladine Element Cards"   class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Peladine\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> P.O.T. Peladine</button> ';
												someText += '<button title="P.O.T. Tequan Element Cards"     class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Tequan\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> P.O.T. Tequan</button> ';
												someText += '<button title="Psycanti Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Psycanti\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Psycanti </button> ';
												someText += '<button title="Scorpead Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Scorpead\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Scorpead </button> ';
												someText += '<button title="Tufor Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Tufor\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Tufor </button> ';
												someText += '<button title="Visonic Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Visonic\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Visonic </button> ';
												someText += '<button title="Zedan Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Zedan\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Zedan </button> ';
												someText += '&nbsp;';
											someText += '</p>';
								someText += '</td>';
								someText += '<td valign="top">';
											someText += '<p class="buttontext">';
												someText += '<span style="background-color: black">&nbsp;<b>Indirigan Tribes (Minor Empires):</b></span><br>';
												someText += '<button title="Show All Indirigan Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Indirigan\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> All Indirigan Cards </button> ';
												someText += '&nbsp;';
												someText += '<button title="Show Generic Indirigan Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'IndiriganCards\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Generic Indirigan Cards </button> ';
												someText += '<button title="Show Indirigan Chieftains" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'IndiriganChieftain\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Indirigan Chieftains </button> ';
												someText += '<button title="Show Indirigan Females" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'IndiriganFemale\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Indirigan Females </button> ';
												someText += '&nbsp;';
												someText += '<button title="Grand Chieftain\'s Touring Fleet Tribe (PE and UE Indirigan Ships)" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'GrandChieftain\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Grand Chieftain </button> ';
												someText += '&nbsp;';
												someText += '<button title="Andromeda Bound Tribe Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'AndromedaBound\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Andromeda Bound </button> ';
												someText += '<button title="Council of Six Tribe Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'CouncilofSix\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Council of Six </button> ';
												someText += '<button title="Garshain Tribe Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Garshain\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Garshain </button> ';
												someText += '<button title="Gray Death Tribe Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'GrayDeath\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Gray Death </button> ';
												someText += '<button title="Infected Tribe Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Infected\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Infected </button> ';
												someText += '<button title="Insipid Tribe Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Insipid\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Insipid </button> ';
												someText += '<button title="Invincible Loner Tribe Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'InvincibleLoner\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Invincible Loner </button> ';
												someText += '<button title="Lone Wolf Tribe Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'LoneWolf\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Lone Wolf </button> ';
												someText += '<button title="Meerkats Tribe Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Meerkats\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Meerkats </button> ';
												someText += '<button title="Nagiridni Tribe Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Nagiridni\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Nagiridni </button> ';
												someText += '<button title="Propagationist Tribe Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Propagationist\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Propagationist </button> ';
												someText += '<button title="Vacater Tribe Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Vacater\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Vacater </button> ';
												someText += '<button title="Vicious Six Tribe Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'ViciousSix\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Vicious Six </button> ';
												someText += '<button title="Vinciennes Tribe Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Vinciennes\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Vinciennes </button> ';
												someText += '<button title="Violators Tribe Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Violator\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Violators </button> ';
												someText += '<button title="Wolvesbane Tribe Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Wolvesbane\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Wolvesbane </button> ';
											someText += '</p>';
								someText += '</td>';
							someText += '</tr>';
						someText += '</table>';
						someText += '<table border="0" cellpadding="1" cellspacing="1" width="100%">';
							someText += '<tr>';
								someText += '<td valign="top">';
											someText += '<p class="buttontext">';
												someText += '<span style="background-color: black">&nbsp;<b>Minor Empires:</b></span><br>';
												someText += '<button title="Aesthetic Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Aesthetic\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Aesthetic </button> ';
												someText += '<button title="Battle Bird Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'BattleBird\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Battle Birds </button> ';
												someText += '<button title="Bolaar Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Bolaar\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Bolaar </button> ';
												someText += '<button title="Collector Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Collector\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Collector </button> ';
												someText += '<button title="Corporate Pirate Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'CorpPir\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Corporate Pirate </button> ';
												someText += '<button title="Indirigan Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Indirigan\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Indirigan </button> ';
												someText += '<button title="Noble Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Noble\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Noble </button> ';
												someText += '<button title="Orgon Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Orgon\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Orgon </button> ';
												someText += '<button title="Space Dragon Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'SpaceDragon\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Space Dragon </button> ';
												someText += '<button title="Time Knight Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'TimeKnight\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Time Knight </button> ';
												someText += '<button title="Tranoan Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Tranoan\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Tranoan </button> ';
												someText += '<button title="Treglean Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Treglean\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Treglean </button> ';
												someText += '<button title="Vektrean Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Vektrean\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Vektrean </button> ';
												someText += '&nbsp;';
											someText += '</p>';
								someText += '</td>';
								someText += '<td valign="top">';
											someText += '<p class="buttontext">';
												someText += '<span style="background-color: black">&nbsp;<b>Allied Empires (Minor Empires):</b></span><br>';
												someText += '<button title="Drone Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Drone\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Drone (Mechad) </button> ';
												someText += '<button title="Erodi Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Erodi\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Erodi (Tufor) </button> ';
												someText += '<button title="Pakta\'don Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Paktadon\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Pakta\'don (P.O.T.) </button> ';
												someText += '<button title="Paraloid Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Paraloid\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Paraloid (Clydon) </button> ';
												someText += '<button title="Shon-ti Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Shonti\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Shon-ti (Zedan) </button> ';
												someText += '<button title="Tarra\'ki Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Tarraki\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Tarra\'ki (Argonian) </button> ';
												someText += '<button title="Trochilidae Empire Cards" class="btnempire"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+",	\'Trochilidae\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Trochilidae (Leopan) </button> ';
												someText += '&nbsp;';
											someText += '</p>';
								someText += '</td>';
							someText += '</tr>';
						someText += '</table>';
				someText += '</div>';
		if (ShowWhich !=="NeedsList") {
					someText += '<button id="B8" class="booklist"><p class="nomargin"><b>Cards by Point Use &amp; Production<span id="SB8" style="float:right;">&nbsp;+&nbsp;&nbsp;</span></b></p> </button> ';
						someText += '<div class="panel" id="P8" style="top:0px";>';
							someText += '<table border="0" cellpadding="1" cellspacing="1" width="100%">';
								someText += '<tr>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<span style="background-color: black">&nbsp;<b>Point Production:</b></span>';
											someText += '<br>';
											someText += '<button title="Reset Command Points filter" class="btncommandpoints activecommandpoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Reset &#10026; / &#10087;</u></b> </button> ';
											someText += '&nbsp;';
											someText += '<button title="1 Command Point" class="btncommandpoints"									onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'01_CommandPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10026; </button> ';
											someText += '<button title="1+ Command Point" class="btncommandpoints"									onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'CommandPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10026;+ </button> ';
											someText += '<button title="2 Command Points" class="btncommandpoints"									onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'02_CommandPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10026;&#10026; </button> ';
											someText += '<button title="2+ Command Points" class="btncommandpoints"									onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'CommandPoints\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10026;&#10026;+ </button> ';
											someText += '<button title="3 Command Points" class="btncommandpoints"									onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'03_CommandPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10026;&#10026;&#10026; </button> ';
											someText += '<button title="3+ Command Points" class="btncommandpoints"									onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'CommandPointss\'	\'Nul\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10026;&#10026;&#10026;+ </button> ';
											someText += '<button title="4 Command Points" class="btncommandpoints"									onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'04_CommandPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10026;&#10026;&#10026;&#10026; </button> ';
											someText += '<button title="7 Lobster Points" class="btncommandpoints"									onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'07_LobsterPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10087;&#10087;&#10087;&#10087;&#10087;&nbsp;&#10087;&#10087; </button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<span style="background-color: black">&nbsp;<b>Point Cost:</b></span>';
											someText += '<br>';
											someText += '<button title="Reset Command / Engagement Cost filter" class="btncommandcost activecommandcost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Reset &#10026; / Engagement Cost</u></b> </button> ';
											someText += '&nbsp;';
											someText += '<button title="Cards which cost a Command Point to engage" class="btncommandcost"					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'CommandCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10026; </button> ';
											someText += '&nbsp;';
											someText += '<button title="Units with no Engagement Cost" class="btncommandcost"								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'No_Engagement\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> No Engagement Cost </button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
								someText += '</tr>';
								someText += '<tr>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<button title="Reset Economy Generation filter" class="btneconomypoints activeeconomypoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Reset &#10061;</u></b> </button> ';
											someText += '&nbsp;';
											someText += '<button title="Produces 1 Economy Points" class="btneconomypoints"								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'01_EconomyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10061; </button> ';
											someText += '<button title="Produces 1+ Economy Points" class="btneconomypoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'EconomyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10061;+ </button> ';
											someText += '<button title="Produces 2 Economy Points" class="btneconomypoints"								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'02_EconomyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10061;&#10061; </button> ';
											someText += '<button title="Produces 2+ Economy Points" class="btneconomypoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'EconomyPoints\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10061;&#10061;+ </button> ';
											someText += '<button title="Produces 3 Economy Points" class="btneconomypoints"								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'03_EconomyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10061;&#10061;&#10061; </button> ';
											someText += '<button title="Produces 3+ Economy Points" class="btneconomypoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'EconomyPointss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10061;&#10061;&#10061;+ </button> ';
											someText += '<button title="Produces 4 Economy Points" class="btneconomypoints"								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'04_EconomyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10061;&#10061;&#10061;&#10061; </button> ';
											someText += '<button title="Produces 4+ Economy Points" class="btneconomypoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'EconomyPointsss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10061;&#10061;&#10061;&#10061;+ </button> ';
											someText += '<button title="Produces 5 Economy Points" class="btneconomypoints"								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'05_EconomyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10061;&#10061;&#10061;&#10061;&#10061; </button> ';
											someText += '<button title="Produces 5+ Economy Points" class="btneconomypoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'EconomyPointssss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10061;&#10061;&#10061;&#10061;&#10061;+ </button> ';
											someText += '<button title="Produces 6 Economy Points" class="btneconomypoints"								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'06_EconomyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10061;&#10061;&#10061;&#10061;&#10061;&nbsp;&#10061; </button> ';
											someText += '<button title="Produces 6+ Economy Points" class="btneconomypoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'EconomyPointsssss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10061;&#10061;&#10061;&#10061;&#10061;&nbsp;&#10061;+ </button> ';
											someText += '<button title="Produces 7 Economy Points" class="btneconomypoints"								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'07_EconomyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10061;&#10061;&#10061;&#10061;&#10061;&nbsp;&#10061;&#10061; </button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<button title="Reset Economy Cost filter" class="btneconomycost activeeconomycost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Reset &#10061;</u></b> </button> ';
											someText += '&nbsp;';
											someText += '<button title="Requires 0 Economy Point" class="btneconomycost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'00_EconomyCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10061; </button> ';
											someText += '<button title="Requires 1 Economy Point" class="btneconomycost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'01_EconomyCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10061; </button> ';
											someText += '<button title="Requires 2 Economy Points" class="btneconomycost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'02_EconomyCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10061;&#10061; </button> ';
											someText += '<button title="Requires 3 Economy Points" class="btneconomycost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'03_EconomyCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10061;&#10061;&#10061; </button> ';
											someText += '<button title="Requires 4 Economy Points" class="btneconomycost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'EconomyCostsss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10061;&#10061;&#10061;&#10061; </button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
								someText += '</tr>';
								someText += '<tr>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<button title="Reset Supply Generation filter" class="btnsupplypoints activesupplypoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Reset &#11044;</u></b> </button> ';
											someText += '&nbsp;';
											someText += '<button title="Produces 1 Supply Points" class="btnsupplypoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'01_SupplyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#11044; </button> ';
											someText += '<button title="Produces 1+ Supply Points" class="btnsupplypoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'SupplyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#11044;+ </button> ';
											someText += '<button title="Produces 2 Supply Points" class="btnsupplypoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'02_SupplyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#11044;&#11044; </button> ';
											someText += '<button title="Produces 2+ Supply Points" class="btnsupplypoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'SupplyPoints\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#11044;&#11044;+ </button> ';
											someText += '<button title="Produces 3 Supply Points" class="btnsupplypoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'03_SupplyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#11044;&#11044;&#11044; </button> ';
											someText += '<button title="Produces 3+ Supply Points" class="btnsupplypoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'SupplyPointss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#11044;&#11044;&#11044;+ </button> ';
											someText += '<button title="Produces 4 Supply Points" class="btnsupplypoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'04_SupplyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#11044;&#11044;&#11044;&#11044; </button> ';
											someText += '<button title="Produces 4+ Supply Points" class="btnsupplypoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'SupplyPointsss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#11044;&#11044;&#11044;&#11044;+ </button> ';
											someText += '<button title="Produces 5 Supply Points" class="btnsupplypoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'05_SupplyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#11044;&#11044;&#11044;&#11044;&#11044; </button> ';
											someText += '<button title="Produces 5+ Supply Points" class="btnsupplypoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'SupplyPointssss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#11044;&#11044;&#11044;&#11044;&#11044;+ </button> ';
											someText += '<button title="Produces 6 Supply Points" class="btnsupplypoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'06_SupplyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#11044;&#11044;&#11044;&#11044;&#11044;&nbsp;&#11044; </button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<button title="Reset Supply Cost filter" class="btnsupplycost activesupplycost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Reset &#11044;</u></b> </button> ';
											someText += '&nbsp;';
											someText += '<button title="Requires 0 Supply Point" class="btnsupplycost"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'00_SupplyCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#11044;&times;0 </button> ';
											someText += '<button title="Requires 1 Supply Point" class="btnsupplycost"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'01_SupplyCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#11044; </button> ';
											someText += '<button title="Requires 2 Supply Points" class="btnsupplycost"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'02_SupplyCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#11044;&#11044; </button> ';
											someText += '<button title="Requires 3 Supply Points" class="btnsupplycost"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'03_SupplyCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#11044;&#11044;&#11044; </button> ';
											someText += '<button title="Requires 4 Supply Points" class="btnsupplycost"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'04_SupplyCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#11044;&#11044;&#11044;&#11044; </button> ';
											someText += '<button title="Requires 5 Supply Points" class="btnsupplycost"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'SupplyCostssss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#11044;&#11044;&#11044;&#11044;&#11044; </button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
								someText += '</tr>';
								someText += '<tr>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<button title="Reset Energy Generation filter" class="btnenergypoints activeenergypoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Reset &#10040;</u></b> </button> ';
											someText += '&nbsp;';
											someText += '<button title="Produces 1 Energy Points" class="btnenergypoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'01_EnergyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10040; </button> ';
											someText += '<button title="Produces 1+ Energy Points" class="btnenergypoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'EnergyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10040;+ </button> ';
											someText += '<button title="Produces 2 Energy Points" class="btnenergypoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'02_EnergyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10040;&#10040; </button> ';
											someText += '<button title="Produces 2+ Energy Points" class="btnenergypoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'EnergyPoints\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10040;&#10040;+ </button> ';
											someText += '<button title="Produces 3 Energy Points" class="btnenergypoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'03_EnergyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10040;&#10040;&#10040; </button> ';
											someText += '<button title="Produces 3+ Energy Points" class="btnenergypoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'EnergyPointss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10040;&#10040;&#10040;+ </button> ';
											someText += '<button title="Produces 4 Energy Points" class="btnenergypoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'04_EnergyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10040;&#10040;&#10040;&#10040; </button> ';
											someText += '<button title="Produces 4+ Energy Points" class="btnenergypoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'EnergyPointsss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10040;&#10040;&#10040;&#10040;+ </button> ';
											someText += '<button title="Produces 5 Energy Points" class="btnenergypoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'05_EnergyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10040;&#10040;&#10040;&#10040;&#10040; </button> ';
											someText += '<button title="Produces 5+ Energy Points" class="btnenergypoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'EnergyPointssss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10040;&#10040;&#10040;&#10040;&#10040;+ </button> ';
											someText += '<button title="Produces 6 Energy Points" class="btnenergypoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'06_EnergyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10040;&#10040;&#10040;&#10040;&#10040;&nbsp;&#10040; </button> ';
											someText += '<button title="Produces 6+ Energy Points" class="btnenergypoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'EnergyPointsssss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10040;&#10040;&#10040;&#10040;&#10040;&nbsp;&#10040;+ </button> ';
											someText += '<button title="Produces 7 Energy Points" class="btnenergypoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'07_EnergyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10040;&#10040;&#10040;&#10040;&#10040;&nbsp;&#10040;&#10040; </button> ';
											someText += '<button title="Produces 7+ Energy Points" class="btnenergypoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'EnergyPointssssss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10040;&#10040;&#10040;&#10040;&#10040;&nbsp;&#10040;&#10040;+ </button> ';
											someText += '<button title="Produces 8 Energy Points"  class="btnenergypoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'09_EnergyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10040;&#10040;&#10040;&#10040;&#10040;&nbsp;&#10040;&#10040;&#10040;&#10040; </button> ';
											someText += '<button title="Produces 8+ Energy Points"  class="btnenergypoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'EnergyPointssssssss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10040;&#10040;&#10040;&#10040;&#10040;&nbsp;&#10040;&#10040;&#10040;&#10040;+ </button> ';
											someText += '<button title="Produces 9 Energy Points"  class="btnenergypoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'10_EnergyPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10040;&#10040;&#10040;&#10040;&#10040;&nbsp;&#10040;&#10040;&#10040;&#10040;&#10040; </button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<button title="Reset Energy Cost filter" class="btnenergycost activeenergycost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Reset &#10040;</u></b> </button> ';
											someText += '&nbsp;';
											someText += '<button title="Requires 0 Energy Point"  class="btnenergycost" 					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'00_EnergyCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10040;&times;0 </button> ';
											someText += '<button title="Requires 1 Energy Point"  class="btnenergycost" 					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'01_EnergyCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10040; </button> ';
											someText += '<button title="Requires 2 Energy Points" class="btnenergycost" 					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'02_EnergyCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10040;&#10040; </button> ';
											someText += '<button title="Requires 3 Energy Points" class="btnenergycost" 					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'03_EnergyCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10040;&#10040;&#10040; </button> ';
											someText += '<button title="Requires 4 Energy Points" class="btnenergycost" 					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'04_EnergyCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10040;&#10040;&#10040;&#10040; </button> ';
											someText += '<button title="Requires 5 Energy Points" class="btnenergycost" 					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'05_EnergyCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10040;&#10040;&#10040;&#10040;&#10040; </button> ';
											someText += '<button title="Requires 6 Energy Points" class="btnenergycost" 					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'EnergyCostsssss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10040;&#10040;&#10040;&#10040;&#10040;&nbsp;&#10040; </button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
								someText += '</tr>';
								someText += '<tr>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<button title="Reset Ammo Generation filter" class="btnammopoints activeammopoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Reset &#9724;</u></b> </button> ';
											someText += '&nbsp;';
											someText += '<button title="Produces 1 Ammo Points" class="btnammopoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'01_AmmoPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&nbsp;</button> ';
											someText += '<button title="Produces 1+ Ammo Points" class="btnammopoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'AmmoPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;+&nbsp;</button> ';
											someText += '<button title="Produces 2 Ammo Points" class="btnammopoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'02_AmmoPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&#9724;&nbsp;</button> ';
											someText += '<button title="Produces 2+ Ammo Points" class="btnammopoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'AmmoPoints\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&#9724;+&nbsp;</button> ';
											someText += '<button title="Produces 3 Ammo Points" class="btnammopoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'03_AmmoPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&#9724;&#9724;&nbsp;</button> ';
											someText += '<button title="Produces 3+ Ammo Points" class="btnammopoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'AmmoPointss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&#9724;&#9724;+&nbsp;</button> ';
											someText += '<button title="Produces 4 Ammo Points" class="btnammopoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'04_AmmoPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&#9724;&#9724;&#9724;&nbsp;</button> ';
											someText += '<button title="Produces 4+ Ammo Points" class="btnammopoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'AmmoPointsss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&#9724;&#9724;&#9724;+&nbsp;</button> ';
											someText += '<button title="Produces 5 Ammo Points" class="btnammopoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'05_AmmoPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&#9724;&#9724;&#9724;&#9724;&nbsp;</button> ';
											someText += '<button title="Produces 5+ Ammo Points" class="btnammopoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'AmmoPointssss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&#9724;&#9724;&#9724;&#9724;+&nbsp;</button> ';
											someText += '<button title="Produces 6 Ammo Points" class="btnammopoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'06_AmmoPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&#9724;&#9724;&#9724;&#9724;&nbsp;&#9724;&nbsp;</button> ';
											someText += '<button title="Produces 6+ Ammo Points" class="btnammopoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'AmmoPointsssss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&#9724;&#9724;&#9724;&#9724;&nbsp;&#9724;+&nbsp;</button> ';
											someText += '<button title="Produces 7 Ammo Points" class="btnammopoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'07_AmmoPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&#9724;&#9724;&#9724;&#9724;&nbsp;&#9724;&#9724;&nbsp;</button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<button title="Reset Ammo Cost filter" class="btnammocost activeammocost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Reset &#9724;</u></b> </button> ';
											someText += '&nbsp;';
											someText += '<button title="Requires 0 Ammo Point" class="btnammocost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'00_AmmoCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&times;0&nbsp;</button> ';
											someText += '<button title="Requires 1 Ammo Point" class="btnammocost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'01_AmmoCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&nbsp;</button> ';
											someText += '<button title="Requires 2 Ammo Points" class="btnammocost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'02_AmmoCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&#9724;&nbsp;</button> ';
											someText += '<button title="Requires 3 Ammo Points" class="btnammocost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'03_AmmoCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&#9724;&#9724;&nbsp;</button> ';
											someText += '<button title="Requires 4 Ammo Points" class="btnammocost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'04_AmmoCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&#9724;&#9724;&#9724;&nbsp;</button> ';
											someText += '<button title="Requires 5 Ammo Points" class="btnammocost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'AmmoCostssss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&#9724;&#9724;&#9724;&#9724;&nbsp;</button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
								someText += '</tr>';
								someText += '<tr>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<button title="Reset Research Generation filter" class="btnresearchpoints activeresearchpoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Reset &#10063;</u></b> </button> ';
											someText += '&nbsp;';
											someText += '<button title="Produces 1 Research Points" class="btnresearchpoints"								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'01_ResearchPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10063; </button> ';
											someText += '<button title="Produces 1+ Research Points" class="btnresearchpoints"								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ResearchPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10063;+ </button> ';
											someText += '<button title="Produces 2 Research Points" class="btnresearchpoints"								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'02_ResearchPoints\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10063;&#10063; </button> ';
											someText += '<button title="Produces 2+ Research Points" class="btnresearchpoints"								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ResearchPoints\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10063;&#10063;+ </button> ';
											someText += '<button title="Produces 3 Research Points" class="btnresearchpoints"								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'03_ResearchPointss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10063;&#10063;&#10063; </button> ';
											someText += '<button title="Produces 3+ Research Points" class="btnresearchpoints"								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ResearchPointss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10063;&#10063;&#10063;+ </button> ';
											someText += '<button title="Produces 4 Research Points" class="btnresearchpoints"								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'04_ResearchPointsss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10063;&#10063;&#10063;&#10063; </button> ';
											someText += '<button title="Produces 4+ Research Points" class="btnresearchpoints"								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ResearchPointsss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10063;&#10063;&#10063;&#10063;+ </button> ';
											someText += '<button title="Produces 5 Research Points" class="btnresearchpoints"								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'05_ResearchPointssss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10063;&#10063;&#10063;&#10063;&#10063; </button> ';
											someText += '<button title="Produces 5+ Research Points" class="btnresearchpoints"								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ResearchPointssss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10063;&#10063;&#10063;&#10063;&#10063;+ </button> ';
											someText += '<button title="Produces 6 Research Points" class="btnresearchpoints"								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'06_ResearchPointsssss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10063;&#10063;&#10063;&#10063;&#10063;&nbsp;&#10063; </button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
									someText += '<td valign="top" rowspan="2">';
										someText += '<p class="buttontext">';
											someText += '<button title="Reset Research Cost filter" class="btnresearchcost activeresearchcost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Reset &#10063;</u></b> </button> ';
											someText += '&nbsp;';
											someText += '<button title="Requires 0 Research Point" class="btnresearchcost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'00_ResearchCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10063;&times0 </button> ';
											someText += '<button title="Requires 1 Research Point" class="btnresearchcost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'01_ResearchCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10063; </button> ';
											someText += '<button title="Requires 2 Research Points" class="btnresearchcost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'02_ResearchCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10063;&#10063; </button> ';
											someText += '<button title="Requires 3 Research Points" class="btnresearchcost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'03_ResearchCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10063;&#10063;&#10063; </button> ';
											someText += '<button title="Requires 4 Research Points" class="btnresearchcost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'04_ResearchCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10063;&#10063;&#10063;&#10063; </button> ';
											someText += '<button title="Requires 5 Research Points" class="btnresearchcost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'05_ResearchCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10063;&#10063;&#10063;&#10063;&#10063; </button> ';
											someText += '<button title="Requires 6 Research Points" class="btnresearchcost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'06_ResearchCost\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10063;&#10063;&#10063;&#10063;&#10063;&nbsp;&#10063; </button> ';
											someText += '<button title="Requires 7 Research Points" class="btnresearchcost"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ResearchCostssssss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> &#10063;&#10063;&#10063;&#10063;&#10063;&nbsp;&#10063;&#10063; </button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
								someText += '</tr>';
								someText += '<tr>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<button title="Reset Repair Generation filter" class="btnrepairpoints activerepairpoints"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Reset &#9830; / &#10070; / &#9829; / &#9826;</u></b> </button> ';
											someText += '&nbsp;';
											someText += '<button title="Produces 1 Repair Points" class="btnrepairpoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'01_RepairPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big><b>&#9830;</b>&nbsp;</button> ';
											someText += '<button title="Produces 1+ Repair Points" class="btnrepairpoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'RepairPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big><b>&#9830;</b>+&nbsp;</button> ';
											someText += '<button title="Produces 2 Repair Points" class="btnrepairpoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'02_RepairPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big><b>&#9830;&#9830;</b>&nbsp;</button> ';
											someText += '<button title="Produces 2+ Repair Points" class="btnrepairpoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'RepairPoints\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big><b>&#9830;&#9830;</b>+&nbsp;</button> ';
											someText += '<button title="Produces 3 Repair Points" class="btnrepairpoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'03_RepairPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big><b>&#9830;&#9830;&#9830;</b>&nbsp;</button> ';
											someText += '<button title="Produces 3+ Repair Points" class="btnrepairpoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'RepairPointss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big><b>&#9830;&#9830;&#9830;</b>+&nbsp;</button> ';
											someText += '<button title="Produces 4 Repair Points" class="btnrepairpoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'04_RepairPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big><b>&#9830;&#9830;&#9830;&#9830;</b>&nbsp;</button> ';
											someText += '<button title="Produces 4+ Repair Points" class="btnrepairpoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'RepairPointsss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big><b>&#9830;&#9830;&#9830;&#9830;</b>+&nbsp;</button> ';
											someText += '<button title="Produces 5 Repair Points" class="btnrepairpoints"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'05_RepairPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big><b>&#9830;&#9830;&#9830;&#9830;&#9830;</b>&nbsp;</button> ';
											someText += '&nbsp;';
											someText += '<button title="Produces 1 Monster/Dragon Healing Points" class="btnrepairpoints"			onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'01_HealingPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#10070;&nbsp;</button> ';
											someText += '<button title="Produces 1+ Monster/Dragon Healing Points" class="btnrepairpoints"			onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'HealingPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#10070;+&nbsp;</button> ';
											someText += '<button title="Produces 2 Monster/Dragon Healing Points" class="btnrepairpoints"			onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'02_HealingPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#10070;&#10070;&nbsp;</button> ';
											someText += '<button title="Produces 2+ Monster/Dragon Healing Points" class="btnrepairpoints"			onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'HealingPoints\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#10070;&#10070;+&nbsp;</button> ';
											someText += '<button title="Produces 3 Monster/Dragon Healing Points" class="btnrepairpoints"			onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'03_HealingPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#10070;&#10070;&#10070;&nbsp;</button> ';
											someText += '<button title="Produces 3+ Monster/Dragon Healing Points" class="btnrepairpoints"			onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'HealingPointss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#10070;&#10070;&#10070;+&nbsp;</button> ';
											someText += '<button title="Produces 4 Monster/Dragon Healing Points" class="btnrepairpoints"			onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'04_HealingPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#10070;&#10070;&#10070;&#10070;&nbsp;</button> ';
											someText += '&nbsp;';
											someText += '<button title="Produces 1 Psy Healing Points" class="btnrepairpoints"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'01_PhealingPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9829;&nbsp;</button> ';
											someText += '<button title="Produces 1+ Psy Healing Points" class="btnrepairpoints"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PhealingPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9829;+&nbsp;</button> ';
											someText += '<button title="Produces 2 Psy Healing Points" class="btnrepairpoints"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'02_PhealingPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9829;&#9829;&nbsp;</button> ';
											someText += '<button title="Produces 2+ Psy Healing Points" class="btnrepairpoints"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PhealingPoints\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9829;&#9829;+&nbsp;</button> ';
											someText += '<button title="Produces 3 Psy Healing Points" class="btnrepairpoints"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'03_PhealingPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9829;&#9829;&#9829;&nbsp;</button> ';
											someText += '<button title="Produces 3+ Psy Healing Points" class="btnrepairpoints"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PhealingPointss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9829;&#9829;&#9829;+&nbsp;</button> ';
											someText += '<button title="Produces 4 Psy Healing Points" class="btnrepairpoints"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'04_PhealingPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9829;&#9829;&#9829;&#9829;+&nbsp;</button> ';
											someText += '<button title="Produces 4+ Psy Healing Points" class="btnrepairpoints"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PhealingPointsss\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9829;&#9829;&#9829;&#9829;+&nbsp;</button> ';
											someText += '<button title="Produces 6 Psy Healing Points" class="btnrepairpoints"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'06_PhealingPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9829;&#9829;&#9829;&#9829;&#9829;&nbsp;&#9829;&nbsp;</button> ';
											someText += '&nbsp;';
											someText += '<button title="Produces 2 Research Healing (Repair) Points" class="btnrepairpoints"		onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'02_FhealingPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9826;&#9826;&nbsp;</button> ';
											someText += '<button title="Produces 2+ Research Healing (Repair) Points" class="btnrepairpoints"		onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'FhealingPoints\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9826;&#9826;+&nbsp;</button> ';
											someText += '<button title="Produces 3 Research Healing (Repair) Points" class="btnrepairpoints"		onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'03_FhealingPoint\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9826;&#9826;&#9826;&nbsp;</button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
								someText += '</tr>';
							someText += '</table>';
						someText += '</div>';
					someText += '<button id="B6" class="booklist"><p class="nomargin"><b>Cards by Weapons &amp; Defenses<span id="SB6" style="float:right;">&nbsp;+&nbsp;&nbsp;</span></b></p> </button> ';
						someText += '<div class="panel" id="P6" style="top:0px";>';
							someText += '<table border="0" cellpadding="1" cellspacing="1" width="100%">';
								someText += '<tr>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<span style="background-color: black">&nbsp;<b>Weapons:</b></span><br>';
											someText += '<button title="Reset Heavy Weapons filter" class="btnheavyweapons activeheavyweapons"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'\'"+n+""+n+""+n+""+n+""+n+")"> <b><u>Reset &#9724;</u></b> </button> ';
											someText += '&nbsp;';
											someText += '<button title="1 Heavy Weapon" class="btnheavyweapons"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'01_HeavyWeapon\'"+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&nbsp;</button> ';
											someText += '<button title="2 Heavy Weapons" class="btnheavyweapons"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'02_HeavyWeapon\'"+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&#9724;&nbsp;</button> ';
											someText += '<button title="3 Heavy Weapons" class="btnheavyweapons"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'03_HeavyWeapon\'"+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&#9724;&#9724;&nbsp;</button> ';
											someText += '<button title="4 Heavy Weapons" class="btnheavyweapons"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'04_HeavyWeapon\'"+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&#9724;&#9724;&#9724;&nbsp;</button> ';
											someText += '<button title="5 Heavy Weapons" class="btnheavyweapons"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'05_HeavyWeapon\'"+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&#9724;&#9724;&#9724;&#9724;&nbsp;</button> ';
											someText += '<button title="6 Heavy Weapons" class="btnheavyweapons"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'06_HeavyWeapon\'"+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&#9724;&#9724;&#9724;&#9724;&nbsp;&#9724;&nbsp;</button> ';
											someText += '<button title="7 Heavy Weapons" class="btnheavyweapons"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'07_HeavyWeapon\'"+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&#9724;&#9724;&#9724;&#9724;&nbsp;&#9724;&#9724;&nbsp;</button> ';
											someText += '<button title="8 Heavy Weapons" class="btnheavyweapons"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'HeavyWeaponsssssss\'"+n+""+n+""+n+""+n+""+n+")"><big>&nbsp;</big>&#9724;&#9724;&#9724;&#9724;&#9724;&nbsp;&#9724;&#9724;&#9724;&nbsp;</button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
									someText += '<td valign="top" rowspan="3" width="40%">';
										someText += '<p class="buttontext">';
											someText += '<span style="background-color: black">&nbsp;<b>Defenses:</b></span><br>';
											someText += '<button title="Reset Defenses filter" class="btndefenses activedefenses"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'\'"+n+""+n+")"> <b><u>Reset &#10023; / &#10022; / &#10122;</u></b> </button> ';
										someText += '&nbsp;';
										someText += '</p>';
										someText += '<p class="buttontext">';
											someText += '<button title="No Shields or other defenses" class="btndefenses"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'No_Shield\'"+n+""+n+")"> &#10023;x0 </button> ';
											someText += '<button title="1 Shield" class="btndefenses"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'01_Shield\'"+n+""+n+")"> &#10023; </button> ';
											someText += '<button title="2 Shields" class="btndefenses"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'02_Shield\'"+n+""+n+")"> &#10023;&#10023; </button> ';
											someText += '<button title="3 Shields" class="btndefenses"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'03_Shield\'"+n+""+n+")"> &#10023;&#10023;&#10023; </button> ';
											someText += '<button title="4 Shields" class="btndefenses"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'04_Shield\'"+n+""+n+")"> &#10023;&#10023;&#10023;&#10023; </button> ';
											someText += '<button title="5 Shields" class="btndefenses"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'05_Shield\'"+n+""+n+")"> &#10023;&#10023;&#10023;&#10023;&#10023; </button> ';
											someText += '<button title="6 Shields" class="btndefenses"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'06_Shield\'"+n+""+n+")"> &#10023;&#10023;&#10023;&#10023;&#10023; &#10023; </button> ';
											someText += '<button title="7 Shields" class="btndefenses"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'07_Shield\'"+n+""+n+")"> &#10023;&#10023;&#10023;&#10023;&#10023; &#10023;&#10023; </button> ';
											someText += '<button title="8 Shields" class="btndefenses"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'08_Shield\'"+n+""+n+")"> &#10023;&#10023;&#10023;&#10023;&#10023; &#10023;&#10023;&#10023; </button> ';
											someText += '<button title="9 Shields" class="btndefenses"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'09_Shield\'"+n+""+n+")"> &#10023;&#10023;&#10023;&#10023;&#10023; &#10023;&#10023;&#10023;&#10023; </button> ';
											someText += '<button title="10 Shields" class="btndefenses"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'10_Shield\'"+n+""+n+")"> &#10023;&#10023;&#10023;&#10023;&#10023; &#10023;&#10023;&#10023;&#10023;&#10023; </button> ';
											someText += '<button title="12 Shields" class="btndefenses"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'12_Shield\'"+n+""+n+")"> &#10023;&#10023;&#10023;&#10023;&#10023; &#10023;&#10023;&#10023;&#10023;&#10023; &#10023;&#10023; </button> ';
										someText += '&nbsp;';
										someText += '</p><p class="buttontext">';
											someText += '<button title="1 EMF Node" class="btndefenses"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'01_Node\'"+n+""+n+")"><big>&nbsp;</big>&#10022;&nbsp;</button> ';
											someText += '<button title="2 EMF Nodes" class="btndefenses"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'02_Node\'"+n+""+n+")"><big>&nbsp;</big>&#10022;&#10022;&nbsp;</button> ';
											someText += '<button title="3 EMF Nodes" class="btndefenses"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'03_Node\'"+n+""+n+")"><big>&nbsp;</big>&#10022;&#10022;&#10022;&nbsp;</button> ';
										someText += '&nbsp;';
										someText += '</p><p class="buttontext">';
											someText += '<button title="1 Armor System" class="btndefenses"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'01_ArmorSystem\'"+n+""+n+")"> &#10122; </button> ';
											someText += '<button title="2 Armor System" class="btndefenses"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'02_ArmorSystem\'"+n+""+n+")"> &#10123; </button> ';
											someText += '<button title="3 Armor System" class="btndefenses"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'03_ArmorSystem\'"+n+""+n+")"> &#10124; </button> ';
											someText += '<button title="4 Armor System" class="btndefenses"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'04_ArmorSystem\'"+n+""+n+")"> &#10125; </button> ';
											someText += '<button title="5 Armor System" class="btndefenses"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'05_ArmorSystem\'"+n+""+n+")"> &#10126; </button> ';
											someText += '<button title="6 Armor System" class="btndefenses"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'06_ArmorSystem\'"+n+""+n+")"> &#10127; </button> ';
											someText += '<button title="7 Armor System" class="btndefenses"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'07_ArmorSystem\'"+n+""+n+")"> &#10128; </button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
								someText += '</tr>';
								someText += '<tr>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<button title="Reset Non-Heavy Weapons filter" class="btnphasers activephasers"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'\'"+n+""+n+""+n+""+n+")"> <b><u>Reset &#10012;</u></b> </button> ';
											someText += '&nbsp;';
											someText += '<button title="1 Non-Heavy Weapon" class="btnphasers"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'01_Phaser\'"+n+""+n+""+n+""+n+")"> &#10012; </button> ';
											someText += '<button title="2 Non-Heavy Weapons" class="btnphasers"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'02_Phaser\'"+n+""+n+""+n+""+n+")"> &#10012;&#10012; </button> ';
											someText += '<button title="3 Non-Heavy Weapons" class="btnphasers"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'03_Phaser\'"+n+""+n+""+n+""+n+")"> &#10012;&#10012;&#10012; </button> ';
											someText += '<button title="4 Non-Heavy Weapons" class="btnphasers"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'04_Phaser\'"+n+""+n+""+n+""+n+")"> &#10012;&#10012;&#10012;&#10012; </button> ';
											someText += '<button title="5 Non-Heavy Weapons" class="btnphasers"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'05_Phaser\'"+n+""+n+""+n+""+n+")"> &#10012;&#10012;&#10012;&#10012;&#10012; </button> ';
											someText += '<button title="6 Non-Heavy Weapons" class="btnphasers"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'06_Phaser\'"+n+""+n+""+n+""+n+")"> &#10012;&#10012;&#10012;&#10012;&#10012;&nbsp;&#10012; </button> ';
											someText += '<button title="7 Non-Heavy Weapons" class="btnphasers"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'07_Phaser\'"+n+""+n+""+n+""+n+")"> &#10012;&#10012;&#10012;&#10012;&#10012;&nbsp;&#10012;&#10012; </button> ';
											someText += '<button title="8 Non-Heavy Weapons" class="btnphasers"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'08_Phaser\'"+n+""+n+""+n+""+n+")"> &#10012;&#10012;&#10012;&#10012;&#10012;&nbsp;&#10012;&#10012;&#10012; </button> ';
											someText += '<button title="9 Non-Heavy Weapons" class="btnphasers"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'09_Phaser\'"+n+""+n+""+n+""+n+")"> &#10012;&#10012;&#10012;&#10012;&#10012;&nbsp;&#10012;&#10012;&#10012;&#10012; </button> ';
											someText += '<button title="10 Non-Heavy Weapons" class="btnphasers"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'10_Phaser\'"+n+""+n+""+n+""+n+")"> &#10012;&#10012;&#10012;&#10012;&#10012;&nbsp;&#10012;&#10012;&#10012;&#10012;&#10012; </button> ';
											someText += '<button title="11 Non-Heavy Weapons" class="btnphasers"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'11_Phaser\'"+n+""+n+""+n+""+n+")"> &#10012;&#10012;&#10012;&#10012;&#10012;&nbsp;&#10012;&#10012;&#10012;&#10012;&#10012;&nbsp;&#10012; </button> ';
											someText += '<button title="12 Non-Heavy Weapons" class="btnphasers"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'12_Phaser\'"+n+""+n+""+n+""+n+")"> &#10012;&#10012;&#10012;&#10012;&#10012;&nbsp;&#10012;&#10012;&#10012;&#10012;&#10012;&nbsp;&#10012;&#10012; </button> ';
										someText += '</p>';
									someText += '</td>';
								someText += '</tr>';
								someText += '<tr>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<button title="Reset Special Weapons &amp; Card Damage filter" class="btncarddamage activecarddamage"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'\'"+n+""+n+""+n+")"> <b><u>Reset &#10005;</u></b> </button> ';
											someText += '&nbsp;';
											someText += '<button title="1 Special Weapon" class="btncarddamage"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'01_CardDamage\'"+n+""+n+""+n+")"> &#10005; </button> ';
											someText += '<button title="2 Special Weapons" class="btncarddamage"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'02_CardDamage\'"+n+""+n+""+n+")"> &#10005;&#10005; </button> ';
											someText += '<button title="3 Special Weapons" class="btncarddamage"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'03_CardDamage\'"+n+""+n+""+n+")"> &#10005;&#10005;&#10005; </button> ';
											someText += '<button title="4 Special Weapons" class="btncarddamage"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'04_CardDamage\'"+n+""+n+""+n+")"> &#10005;&#10005;&#10005;&#10005; </button> ';
											someText += '<button title="5 Special Weapons" class="btncarddamage"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'CardDamagessss\'"+n+""+n+""+n+")"> &#10005;&#10005;&#10005;&#10005;&#10005; </button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
								someText += '</tr>';
							someText += '</table>';
						someText += '</div>';
					someText += '<button id="B7" class="booklist"><p class="nomargin"><b>Cards by Artist<span id="SB7" style="float:right;">&nbsp;+&nbsp;&nbsp;</span></b></p> </button> ';
						someText += '<div class="panel" id="P7" style="top:0px";>';
										someText += '<p class="black">';
											someText += '<span style="background-color: Black">';
												someText += 'The number in Parenthesis is how many cards the artist is credited with. Names in <b>Bold</b> have 20+ cards credited to them.';
											someText += '</span>';
										someText += '</p>';
										someText += '<p class="buttontext">';
											someText += '<button title="Reset Artist filter" class="btnartist activeartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Reset Filter</u></b> </button> ';
											someText += '<button title="Artist Unknown" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'N/A\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Unknown Artist </button> ';
											someText += '&nbsp;';
											someText += '<button title="Aaron Williams (5)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artAaronWilliams\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Aaron Williams (5) </button> ';
											someText += '<button title="Adam Stim (1)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artAdamStim\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Adam Stim (1) </button> ';
											someText += '<button title="Alan Clark (26)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artAlanClark\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Alan Clark</b></u> (26) </button> ';
											someText += '<button title="Alan Gutierrez (24)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artAlanGutierrez\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Alan Gutierrez</b></u> (24) </button> ';
											someText += '<button title="Alan Rabinowitz (3)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artAlanRabinowitz\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Alan Rabinowitz (3) </button> ';
											someText += '<button title="Alec Keating (5)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artAlecKeating\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Alec Keating (5) </button> ';
											someText += '<button title="Andrew Smith (24)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artAndrewSmith\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Andrew Smith</b></u> (24) </button> ';
											someText += '<button title="April Lee (17)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artAprilLee\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> April Lee (17) </button> ';
											someText += '<button title="Aris Multimedia Inc. (17)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artArisMultimediaInc.\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Aris Multimedia Inc. (17) </button> ';
											someText += '<button title="Armand Cabrera (31)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artArmandCabrera\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Armand Cabrera</b></u> (31) </button> ';
											someText += '<button title="Ben Henry (1)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artBenHenry\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Ben Henry (1) </button> ';
											someText += '<button title="Ben Peck (30)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artBenPeck\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Ben Peck</b></u> (30) </button> ';
											someText += '<button title="Beth Fay (1)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artBethFay\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Beth Fay (1) </button> ';
											someText += '<button title="Bob Wesson (56)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artBobWesson\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Bob Wesson</b></u> (56) </button> ';
											someText += '<button title="Bruce Jensen (12)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artBruceJensen\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Bruce Jensen (12) </button> ';
											someText += '<button title="Bryon Wackwitz (4)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artBryonWackwitz\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Bryon Wackwitz (4) </button> ';
											someText += '<button title="C. Henry Schulte (186)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artC.HenrySchulte\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>C. Henry Schulte</b></u> (186) </button> ';
											someText += '<button title="Chris Adams (1)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artChrisAdams\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Chris Adams (1) </button> ';
											someText += '<button title="Christina Wald (46)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artChristinaWald\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Christina Wald</b></u> (46) </button> ';
											someText += '<button title="Cline A. Siegenthaler (4)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artClineA.Siegenthaler\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Cline A. Siegenthaler (4) </button> ';
											someText += '<button title="Companion Games (38)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artCompanionGames\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Companion Games</b></u> (38) </button> ';
											someText += '<button title="Cynthia Mannino (1)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artCynthiaMannino\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Cynthia Mannino (1) </button> ';
											someText += '<button title="D. Mahoney (7)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artD.Mahoney\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> D. Mahoney (7) </button> ';
											someText += '<button title="Dan Adams (1)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artDanAdams\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Dan Adams (1) </button> ';
											someText += '<button title="Dan Gillman (7)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artDanGillman\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Dan Gillman (7) </button> ';
											someText += '<button title="Dan Smith (1)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artDanSmith\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Dan Smith (1) </button> ';
											someText += '<button title="Darryl Elliott (19)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artDarrylElliott\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Darryl Elliott (19) </button> ';
											someText += '<button title="David A. Cherry (48)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artDavidA.Cherry\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>David A. Cherry</b></u> (48) </button> ';
											someText += '<button title="David Chow (11)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artDavidChow\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> David Chow (11) </button> ';
											someText += '<button title="David Lee Anderson (40)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artDavidLeeAnderson\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>David Lee Anderson</b></u> (40) </button> ';
											someText += '<button title="Debbie Hughes (6)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artDebbieHughes\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Debbie Hughes (6) </button> ';
											someText += '<button title="Doug Savage (7)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artDougSavage\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Doug Savage (7) </button> ';
											someText += '<button title="Douglas Chaffee (71)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artDouglasChaffee\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Douglas Chaffee</b></u> (71) </button> ';
											someText += '<button title="Douglas Shuler (28)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artDouglasShuler\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Douglas Shuler</b></u> (28) </button> ';
											someText += '<button title="Edmond Hoyle (1)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artEdmondHoyle\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Edmond Hoyle (1) </button> ';
											someText += '<button title="Edward P. Beard Jr. (64)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artEdwardP.BeardJr.\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Edward P. Beard Jr.</b></u> (64) </button> ';
											someText += '<button title="Elvis McMaad (109)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artElvisMcMaad\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Elvis McMaad</b></u> (109) </button> ';
											someText += '<button title="Frederick Haas (3)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artFrederickHaas\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Frederick Haas (3) </button> ';
											someText += '<button title="Gary A. Kalin (161)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artGaryA.Kalin\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Gary A. Kalin</b></u> (161) </button> ';
											someText += '<button title="George T. Henne Jr. (126)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artGeorgeT.HenneJr.\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>George T. Henne Jr.</b></u> (126) </button> ';
											someText += '<button title="George Vasilakos (1)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artGeorgeVasilakos\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> George Vasilakos (1) </button> ';
											someText += '<button title="Gregg Glymph (25)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artGreggGlymph\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Gregg Glymph</b></u> (25) </button> ';
											someText += '<button title="Heather Bruton (10)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artHeatherBruton\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Heather Bruton (10) </button> ';
											someText += '<button title="jael (21)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artjael\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>jael</b></u> (21) </button> ';
											someText += '<button title="Jay Muchhala (2)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artJayMuchhala\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Jay Muchhala (2) </button> ';
											someText += '<button title="Jim Pavelec (3)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artJimPavelec\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Jim Pavelec (3) </button> ';
											someText += '<button title="John D. Matson (13)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artJohnD.Matson\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> John D. Matson (13) </button> ';
											someText += '<button title="John Holland (17)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artJohnHolland\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> John Holland (17) </button> ';
											someText += '<button title="John &amp; Lisa Hunt (8)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artJohnLisaHunt\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> John &amp; Lisa Hunt (8) </button> ';
											someText += '<button title="Josepha Haveman (14)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artJosephaHaveman\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Josepha Haveman (14) </button> ';
											someText += '<button title="Kris Macintyre (33)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artKrisMacintyre\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Kris Macintyre</b></u> (33) </button> ';
											someText += '<button title="Lawrence Allen Williams (36)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artLawrenceAllenWilliams\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Lawrence Allen Williams</b></u> (36) </button> ';
											someText += '<button title="Leslie Rigley (8)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artLeslieRigley\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Leslie Rigley (8) </button> ';
											someText += '<button title="Lissanne Lake (38)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artLissanneLake\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Lissanne Lake</b></u> (38) </button> ';
											someText += '<button title="Lubov (17)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artLubov\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Lubov (17) </button> ';
											someText += '<button title="Margaret Organ Kean (3)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artMargaretOrganKean\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Margaret Organ Kean (3) </button> ';
											someText += '<button title="Mark Maxwell (24)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artMarkMaxwell\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Mark Maxwell</b></u> (24) </button> ';
											someText += '<button title="Mark Poole (89)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artMarkPoole\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Mark Poole</b></u> (89) </button> ';
											someText += '<button title="Matthew Mastrogiovanoi (1)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artMatthewMastrogiovanoi\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Matthew Mastrogiovanoi (1) </button> ';
											someText += '<button title="Melissa A. Benson (33)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artMelissaA.Benson\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Melissa A. Benson</b></u> (33) </button> ';
											someText += '<button title="Michael Carroll (34)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artMichaelCarroll\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Michael Carroll</b></u> (34) </button> ';
											someText += '<button title="Michael Kelner (13)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artMichaelKelner\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Michael Kelner (13) </button> ';
											someText += '<button title="Michael Trapp (71)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artMichaelTrapp\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Michael Trapp</b></u> (71) </button> ';
											someText += '<button title="Mitchell Davidson Bentley (30)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artMitchellDavidsonBentley\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Mitchell Davidson Bentley</b></u> (30) </button> ';
											someText += '<button title="Mutt Studios (22)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artMuttStudios\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Mutt Studios</b></u> (22) </button> ';
											someText += '<button title="N. Taylor Blanchard (29)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artN.TaylorBlanchard\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>N. Taylor Blanchard</b></u> (29) </button> ';
											someText += '<button title="Ne\'Ne\' Tina A. Thomas (26)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artNeNeTinaA.Thomas\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Ne\'Ne\' Tina A. Thomas</b></u> (26) </button> ';
											someText += '<button title="Nicole Harsch (9)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artNicoleHarsch\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Nicole Harsch (9) </button> ';
											someText += '<button title="Nivard (18)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artNivard\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Nivard (18) </button> ';
											someText += '<button title="Parkinson (1)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artParkinson\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Parkinson (1) </button> ';
											someText += '<button title="Pat Morrissey (38)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artPatMorrissey\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Pat Morrissey</b></u> (38) </button> ';
											someText += '<button title="Paul, \'Prof\' Herbert (36)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artPaulProfHerbert\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Paul, \'Prof\' Herbert</b></u> (36) </button> ';
											someText += '<button title="Ralph Pecchia Jr. (12)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artRalphPecchiaJr.\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Ralph Pecchia Jr. (12) </button> ';
											someText += '<button title="Randy Asplund-Faith (78)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artRandyAsplund-Faith\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Randy Asplund-Faith</b></u> (78) </button> ';
											someText += '<button title="Randy, \'Tarkas\' Hoar (116)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artRandyTarkasHoar\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Randy, \'Tarkas\' Hoar</b></u> (116) </button> ';
											someText += '<button title="Richard J. Rausch (8)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artRichardJ.Rausch\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Richard J. Rausch (8) </button> ';
											someText += '<button title="Rigel (3)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artRigel\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Rigel (3) </button> ';
											someText += '<button title="Robert A. Kraus (137)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artRobertA.Kraus\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Robert A. Kraus</b></u> (137) </button> ';
											someText += '<button title="Ron Rousselle II (53)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artRonRousselleII\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Ron Rousselle II</b></u> (53) </button> ';
											someText += '<button title="Ryan Gable (9)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artRyanGable\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Ryan Gable (9) </button> ';
											someText += '<button title="Scott Werner (12)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artScottWerner\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Scott Werner (12) </button> ';
											someText += '<button title="Sean Smith (5)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artSeanSmith\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Sean Smith (5) </button> ';
											someText += '<button title="Siddig El Fadil (1)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artSiddigElFadil\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Siddig El Fadil (1) </button> ';
											someText += '<button title="Sigmund Frye (46)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artSigmundFrye\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Sigmund Frye</b></u> (46) </button> ';
											someText += '<button title="some guy (2)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artsomeguy\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> some guy (2) </button> ';
											someText += '<button title="Source: Space" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artSourceSpaceTimeArt\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Source: Space	 Time &amp; Art (3) </button> ';
											someText += '<button title="Susan Dawe (4)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artSusanDawe\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Susan Dawe (4) </button> ';
											someText += '<button title="Susan Van Camp (41)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artSusanVanCamp\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Susan Van Camp</b></u> (41) </button> ';
											someText += '<button title="Ted Beargeon (21)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artTedBeargeon\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Ted Beargeon</b></u> (21) </button> ';
											someText += '<button title="The Corporation (1)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artTheCorporation\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> The Corporation (1) </button> ';
											someText += '<button title="Tim Adams (20)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artTimAdams\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Tim Adams</b></u> (20) </button> ';
											someText += '<button title="Todd Lockwood (1)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artToddLockwood\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Todd Lockwood (1) </button> ';
											someText += '<button title="Victor Yarter (5)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artVictorYarter\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Victor Yarter (5) </button> ';
											someText += '<button title="Virginia C. Mills (1)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artVirginiaC.Mills\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Virginia C. Mills (1) </button> ';
											someText += '<button title="William Garris (4)" class="btnartist"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'artWilliamGarris\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> William Garris (4) </button> ';
										someText += '</p>';
						someText += '</div>';
		};
					someText += '<button id="B5" class="booklist"><p class="nomargin"><b>Promo Cards by Distributor<span id="SB5" style="float:right;">&nbsp;+&nbsp;&nbsp;</span></b></p> </button> ';
						someText += '<div class="panel" id="P5" style="top:0px";>';
										someText += '<p class="black">';
										someText += '</p>';
										someText += '<p class="buttontext">';
											someText += '<button title="Reset Distributor filter" class="btndistributor activedistributor"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Reset Filter</u></b> </button> ';
											someText += '&nbsp;';
											someText += '<button title="Albert A. Sidaras" class="btndistributor"   				onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distAlbertASidaras\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Albert A. Sidaras (2)</button> ';
											someText += '<button title="Alternative Cards Distribution" class="btndistributor"  	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distAlternativeCardsDistribution\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Alternative Cards Distribution (1)</button> ';
											someText += '<button title="Andre McInnis" class="btndistributor"   					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distAndreMcInnis\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Andre McInnis (5)</button> ';
											someText += '<button title="Anthony Medici" class="btndistributor"  					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distAnthonyMedici\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Anthony Medici (45)</button> ';
											someText += '<button title="Bart Albs" class="btndistributor"   						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distBartAlbs\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Bart Albs (2)</button> ';
											someText += '<button title="Berkley Distributing" class="btndistributor"				onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distBerkleyDistributing\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Berkley Distributing (2)</button> ';
											someText += '<button title="Bill Murray" class="btndistributor" 						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distBillMurray\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Bill Murray (1)</button> ';
											someText += '<button title="Bold City Graphics" class="btndistributor"  				onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distBoldCityGraphics\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Bold City Graphics (1)</button> ';
											someText += '<button title="Brian DeRienzo" class="btndistributor"  					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distBrianDeRienzo\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Brian DeRienzo (1)</button> ';
											someText += '<button title="C.C.R." class="btndistributor"  							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distCCR\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> C.C.R. (1)</button> ';
											someText += '<button title="Cantrip Magazine" class="btndistributor"					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distCantripMagazine\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Cantrip Magazine (3)</button> ';
											someText += '<button title="Cards Illustrated Magazine" class="btndistributor"  		onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distCardsIllustratedMagazine\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Cards Illustrated Magazine (1)</button> ';
											someText += '<button title="Cards Un-LTD" class="btndistributor"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distCardsUn-LTD\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Cards Un-LTD (23)</button> ';
											someText += '<button title="Cards4U Inc." class="btndistributor"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distCards4UInc\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Cards4U Inc. (11)</button> ';
											someText += '<button title="Chaos Lords" class="btndistributor" 						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distChaosLords\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Chaos Lords (1)</button> ';
											someText += '<button title="Chessex Distributing" class="btndistributor"				onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distChessexDistributing\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Chessex Distributing (2)</button> ';
											someText += '<button title="Combo Magazine" class="btndistributor"  					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distComboMagazine\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Combo Magazine (1)</button> ';
											someText += '<button title="Comicology" class="btndistributor"  						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distComicology\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Comicology (1)</button> ';
											someText += '<button title="Comics Plus" class="btndistributor" 						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distComicsPlus\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Comics Plus (1)</button> ';
											someText += '<button title="Companion Games" class="btndistributor" 					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distCompanionGames\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Companion Games (35)</button> ';
											someText += '<button title="Conjure Magazine" class="btndistributor"					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distConjureMagazine\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Conjure Magazine (2)</button> ';
											someText += '<button title="CouncilofSix@usa.net" class="btndistributor"				onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distCouncilofSix@usanet\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> CouncilofSix@usa.net (11)</button> ';
											someText += '<button title="Crafts by Marion" class="btndistributor"					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distCraftsbyMarion\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Crafts by Marion (3)</button> ';
											someText += '<button title="Dan Gosselin" class="btndistributor"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distDanGosselin\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Dan Gosselin (4)</button> ';
											someText += '<button title="Dan St. Jean" class="btndistributor"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distDanStJean\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Dan St. Jean (2)</button> ';
											someText += '<button title="Darry Jennings" class="btndistributor"  					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distDarryJennings\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Darry Jennings (1)</button> ';
											someText += '<button title="David S. Auer" class="btndistributor"   					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distDavidSAuer\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> David S. Auer (5)</button> ';
											someText += '<button title="David Van Cleef" class="btndistributor" 					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distDavidVanCleef\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> David Van Cleef (5)</button> ';
											someText += '<button title="Days of Knights" class="btndistributor" 					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distDaysofKnights\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Days of Knights (4)</button> ';
											someText += '<button title="Diamond Comics Distributing" class="btndistributor" 		onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distDiamondComicsDistributing\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Diamond Comics Distributing (1)</button> ';
											someText += '<button title="DNA - Andrew & Paul" class="btndistributor" 				onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distDNA-AndrewAndPaul\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> DNA - Andrew & Paul (1)</button> ';
											someText += '<button title="Dractus Distributing" class="btndistributor"				onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distDractusDistributing\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Dractus Distributing (1)</button> ';
											someText += '<button title="Dragon Rider" class="btndistributor"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distDragonRider\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Dragon Rider (1)</button> ';
											someText += '<button title="Elmer Lyons" class="btndistributor" 						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distElmerLyons\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Elmer Lyons (4)</button> ';
											someText += '<button title="Eric B. Smith" class="btndistributor"   					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distEricBSmith\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Eric B. Smith (3)</button> ';
											someText += '<button title="F.P.G. Inc" class="btndistributor"  						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distFPGInc\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> F.P.G. Inc (1)</button> ';
											someText += '<button title="Games Import" class="btndistributor"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distGamesImport\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Games Import (1)</button> ';
											someText += '<button title="Gamesmasters" class="btndistributor"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distGamesmasters\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Gamesmasters (1)</button> ';
											someText += '<button title="Garret Allen" class="btndistributor"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distGarretAllen\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Garret Allen (1)</button> ';
											someText += '<button title="George Brown" class="btndistributor"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distGeorgeBrown\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> George Brown (1)</button> ';
											someText += '<button title="George H. Stewart" class="btndistributor"   				onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distGeorgeHStewart\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> George H. Stewart (14)</button> ';
											someText += '<button title="Gerry Smit" class="btndistributor"  						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distGerrySmit\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Gerry Smit (11)</button> ';
											someText += '<button title="Global Rating Service" class="btndistributor"   			onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distGlobalRatingService\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Global Rating Service (1)</button> ';
											someText += '<button title="Gopin\'s Grenadiers Distributing" class="btndistributor"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distGopinsGrenadiersDistributing\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Gopin\'s Grenadiers Distributing (6)</button> ';
											someText += '<button title="Grosnor Sportscards Inc." class="btndistributor"			onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distGrosnorSportscardsInc\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Grosnor Sportscards Inc. (2)</button> ';
											someText += '<button title="Hairy Tarantula Comics & Games" class="btndistributor"  	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distHairyTarantulaComicsAndGames\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Hairy Tarantula Comics & Games (1)</button> ';
											someText += '<button title="Harry Phillipo" class="btndistributor"  					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distHarryPhillipo\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Harry Phillipo (3)</button> ';
											someText += '<button title="Hobbygames Distributing" class="btndistributor" 			onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distHobbygamesDistributing\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Hobbygames Distributing (1)</button> ';
											someText += '<button title="Jenkintown Hobby Center Inc." class="btndistributor"		onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distJenkintownHobbyCenterInc\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Jenkintown Hobby Center Inc. (1)</button> ';
											someText += '<button title="John Perreault" class="btndistributor"  					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distJohnPerreault\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> John Perreault (3)</button> ';
											someText += '<button title="Loopy" class="btndistributor"   							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distLoopy\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Loopy (2)</button> ';
											someText += '<button title="Loren Crabb" class="btndistributor" 						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distLorenCrabb\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Loren Crabb (1)</button> ';
											someText += '<button title="Magic Cards" class="btndistributor" 						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distMagicCards\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Magic Cards (1)</button> ';
											someText += '<button title="Matt Corbett" class="btndistributor"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distMattCorbett\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Matt Corbett (1)</button> ';
											someText += '<button title="Mayfare Games Inc." class="btndistributor"  				onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distMayfareGamesInc\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Mayfare Games Inc. (1)</button> ';
											someText += '<button title="Mint Card Co." class="btndistributor"   					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distMintCardCo\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Mint Card Co. (64)</button> ';
											someText += '<button title="Multigenre Inc." class="btndistributor" 					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distMultigenreInc\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Multigenre Inc. (1)</button> ';
											someText += '<button title="Neal Feldman" class="btndistributor"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distNealFeldman\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Neal Feldman (3)</button> ';
											someText += '<button title="New York Hall of Science" class="btndistributor"			onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distNewYorkHallofScience\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> New York Hall of Science (1)</button> ';
											someText += '<button title="Nick Sauer" class="btndistributor"  						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distNickSauer\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Nick Sauer (2)</button> ';
											someText += '<button title="Pasttimes" class="btndistributor"   						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distPasttimes\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Pasttimes (7)</button> ';
											someText += '<button title="PBM" class="btndistributor" 								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distPBM\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> PBM (4)</button> ';
											someText += '<button title="Platinum Brothers" class="btndistributor"   				onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distPlatinumBrothers\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Platinum Brothers (1)</button> ';
											someText += '<button title="Pyramid Magazine" class="btndistributor"					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distPyramidMagazine\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Pyramid Magazine (1)</button> ';
											someText += '<button title="RAK Graphics" class="btndistributor"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distRAKGraphics\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> RAK Graphics (1)</button> ';
											someText += '<button title="Rodney Johnson" class="btndistributor"  					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distRodneyJohnson\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Rodney Johnson (1)</button> ';
											someText += '<button title="S&A Games" class="btndistributor"   						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distSAndAGames\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> S&A Games (1)</button> ';
											someText += '<button title="Scott Crater" class="btndistributor"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distScottCrater\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Scott Crater (1)</button> ';
											someText += '<button title="Scrye Magazine" class="btndistributor"  					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distScryeMagazine\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Scrye Magazine (2)</button> ';
											someText += '<button title="Shadis Magazine" class="btndistributor" 					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distShadisMagazine\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Shadis Magazine (1)</button> ';
											someText += '<button title="Silver Eagle Wargame Supplies" class="btndistributor"   	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distSilverEagleWargameSupplies\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Silver Eagle Wargame Supplies (11)</button> ';
											someText += '<button title="Stamford Fire Dept." class="btndistributor" 				onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distStamfordFireDept\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Stamford Fire Dept. (1)</button> ';
											someText += '<button title="Starbase One" class="btndistributor"						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distStarbaseOne\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Starbase One (1)</button> ';
											someText += '<button title="Ted Peer" class="btndistributor"							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distTedPeer\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Ted Peer (3)</button> ';
											someText += '<button title="Time Gates Puzzle" class="btndistributor"   				onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distTimeGatesPuzzle\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Time Gates Puzzle (1)</button> ';
											someText += '<button title="Tuff Stuff Collection" class="btndistributor"   			onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distTuffStuffCollection\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Tuff Stuff Collection (1)</button> ';
											someText += '<button title="Ventura Magazine" class="btndistributor"					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distVenturaMagazine\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Ventura Magazine (3)</button> ';
											someText += '<button title="Wardogs" class="btndistributor" 							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distWardogs\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Wardogs (4)</button> ';
											someText += '<button title="Wargames West Distributing" class="btndistributor"  		onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distWargamesWestDistributing\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Wargames West Distributing (1)</button> ';
											someText += '<button title="Wizard\'s Workshop" class="btndistributor"  				onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'distWizardsWorkshop\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Wizard\'s Workshop (3)</button> ';
										someText += '</p>';
						someText += '</div>';
		if (ShowWhich=="NeedsList") {
					someText += '<button id="B4" class="booklist"><p class="nomargin"><b>Cards by Needs / Wants / Trades<span id="SB4" style="float:right;">&nbsp;+&nbsp;&nbsp;</span></b></p> </button> ';
						someText += '<div class="panel" id="P4" style="top:0px";>';
		} else if (ShowWhich !=="NeedsList") {
					someText += '<button id="B4" class="booklist"><p class="nomargin"><b>Cards by Special Abilities / Properties / Trades<span id="SB4" style="float:right;">&nbsp;+&nbsp;&nbsp;</span></b></p> </button> ';
						someText += '<div class="panel" id="P4" style="top:0px";>';
							someText += '<table border="0" cellpadding="1" cellspacing="1" width="100%">';
								someText += '<tr>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<button title="Reset Special Properties filter" class="mainabilities activeabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Reset Properties Filter</u></b> </button> ';
											someText += '&nbsp;';
											someText += '<button title="Foil Cards" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Foil\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Foil </button> ';
											someText += '&nbsp;';
											someText += '<button title="Booster BoxCovers" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Booster\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Booster Box </button> ';
											someText += '<button title="Starter Box Covers" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Starter\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Starter Box </button> ';
											someText += '<button title="Exclude Boxes (Boosters &amp; Starters)" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Cards\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Cards Only </button> ';
											someText += '&nbsp;';
											someText += '<button title="Aesthetic-Class Cards" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Aesthetic\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Aesthetic </button> ';
											someText += '<button title="Collector-Class Cards" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Collector\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Collector </button> ';
											someText += '<button title="Allied-Class Cards" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Allied\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Allied </button> ';
											someText += '<button title="Attrition-Class Cards" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Attrition\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Attrition </button> ';
											someText += '<button title="Infected-Class Cards" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Infected\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Infected </button> ';
											someText += '<button title="Persona-Class Cards" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Persona\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Persona </button> ';
											someText += '&nbsp;';
											someText += '<button title="Conjectural-Class Cards" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Conjectural\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Conjectural </button> ';
											someText += '<button title="Prototype-Class Cards" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Prototype\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Prototype </button> ';
											someText += '&nbsp;';
											someText += '<button title="Passive Equipment" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Passive\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Equipment: Passive </button> ';
											someText += '<button title="Non-Passive Equipment" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Nonpassive\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Equipment: Non Passive </button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
										someText += '<button title="Cards which have or can be used with an Electronic Warfare System" class="btnabilities"  										onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropElectronicWarfareSystem\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Electronic Warfare System </button> ';
										someText += '<button title="Cards which have or can be used with an Ion Cannon or Nova Cannon" class="btnabilities"  										onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropIonNovaCannon\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Ion/Nova Cannon </button> ';
										someText += '<button title="Cards which have or can be used with a Maneuvering System" class="btnabilities"  												onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropManeuveringSystem\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Maneuvering System </button> ';
										someText += '<button title="Cards which have or can be used with a Mine Deployment System" class="btnabilities"  											onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropMineDeploymentSystem\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Mine Deployment System </button> ';
										someText += '&nbsp;';
										someText += '<button title="Empire Fighters" class="btnabilities"																							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropEmpireFighter\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Empire Fighter </button> ';
										someText += '<button title="Shuttles &amp; Fighters" class="btnabilities"																					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropShuttle\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Shuttle </button> ';
										someText += '<button title="Transporters" class="btnabilities"   																							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropTransporter\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Transporter </button> ';
										someText += '&nbsp;';
										someText += '<button title="Cards which count as Artifacts" class="btnabilities" 																			onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropArtifact\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Artifact </button> ';
										someText += '<button title="Cards which counter specific empires crew, ships, special weapons, etc." class="btnabilities"									onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropAnti\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Anti-Empire </button> ';
										someText += '<button title="Cards that allow you to Draw more Cards" class="btnabilities"																	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropDrawcard\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Card Draw </button> ';
										someText += '<button title="Cards that allow you to Play more Cards" class="btnabilities"																	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropPlaycard\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Card Play </button> ';
										someText += '<button title="Cards that allow you to Draw and Play more Cards" class="btnabilities"   														onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropDrawcard Playcard\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Card Draw &amp; Play </button> ';
										someText += '<button title="Crew that can perform a There-and-Back missions or Cards which boost or allow Crew Cards to do missions" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropBoarding\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Boarding / There-and-Back </button> ';
										someText += '<button title="Chakan: The Forever Man and his Hat" class="btnabilities"																		onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropChakan\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Chakan </button> ';
										someText += '<button title="Cards that allow you to take control of an Oppnents Ship (except for Filarian Infesters)" class="btnabilities"   				onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropControlship\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Control Opponent Ship </button> ';
										someText += '<button title="Cards that count as or boost Cyber Mages" class="btnabilities"   																onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropCyberMage\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Cyber Mage </button> ';
										someText += '<button title="Crew that are Doctors, Nurses, EMTs, or Science Officers" class="btnabilities"   												onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropDoctorScience\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Doctors &amp; Science Officers </button> ';
										someText += '<button title="Cards that are part of Edward P. Beard Jr.\'s Dragons of Space Puzzle" class="btnabilities"  									onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropDragonsOfSpace\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Dragons Of Space </button> ';
										someText += '<button title="Gohest The Legendary Pirate and his Ships" class="btnabilities"  																onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropGohest\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Gohest </button> ';
										someText += '<button title="Mimes. In Space." class="btnabilities"   																						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropMime\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Mime </button> ';
										someText += '<button title="Cards that allow you to force an Opponent Discard" class="btnabilities"  														onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropDiscard\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Opponent Discard </button> ';
										someText += '<button title="Cards that allow you to remove other Cards from the game" class="btnabilities"   												onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropRemoveFromGame\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Remove From Game </button> ';
										someText += '<button title="Cards that allow you to Remove or Discard Cards from play" class="btnabilities"  												onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropRemoveFromPlay\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Remove/Discard from Play </button> ';
										someText += '<button title="Cards that allow you to reduce your Opponents Resource Points" class="btnabilities"  											onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropResourceHoser\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Resource Hoser </button> ';
										someText += '<button title="Cards that allow you to retrieve cards from your Discard Pile" class="btnabilities"  											onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropRetrievecard\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Retrieve from Discard Pile </button> ';
										someText += '<button title="Suark Breed cards" class="btnabilities"  																						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropSuark\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Suark Breed </button> ';
										someText += '<button title="Cards that allow you to use or are considered Adapted Technology" class="btnabilities"   										onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropAdaptedTech\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Technology: Adapted </button> ';
										someText += '<button title="Cards that allow you to use or are considered Exclusive Technology" class="btnabilities" 										onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropExclusiveTech\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Technology: Exclusive </button> ';
										someText += '<button title="Cards that allow you to use or are considered Foreign Technology" class="btnabilities"   										onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropForeignTech\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Technology: Foreign </button> ';
										someText += '<button title="That Darned Monster\'s appearances by Susan Van Camp" class="btnabilities"   													onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropThatDarnMonster\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> That Darn Monster </button> ';
										someText += '<button title="Time Cards" class="btnabilities" 																								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropTimeCard\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Time Card </button> ';
										someText += '<button title="Cards that may affect or are moved to the Time Origin" class="btnabilities"  													onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropTimeOrigin\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Time Origin </button> ';
										someText += '<button title="Equipment Cards which upgrade the combat capabilities of the units they are played on" class="btnabilities"  					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropCombatUpgrade\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Unit Combat Upgrades </button> ';
										someText += '<button title="Cards that allow you to View or Modify the Top of your Deck" class="btnabilities"												onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropTopdeck\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> View/Modify Top Deck </button> ';
										someText += '<button title="Cards that allow you to View your Opponents Hand or Drawn Cards" class="btnabilities"											onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropScoutcard\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> View Opponent Hand/Draw </button> ';
										someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
								someText += '</tr>';
							someText += '</table>';
							someText += '<table border="0" cellpadding="1" cellspacing="1" width="100%">';
								someText += '<tr>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<span style="background-color: black">&nbsp;<b>Base &amp; Ship Abilities:</b></span>';
											someText += '<br>';
											someText += '<button title="Ships or Bases with are Attrition Class" class="btnabilities"   																										onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShipClassAttrition\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Attrition </button> ';
											someText += '<button title="Ships or Bases with the term Battlecruiser in their name" class="btnabilities"  																						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShipClassBattlecruiser\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Battlecruiser </button> ';
											someText += '<button title="Ships or Bases with the term Battleship in their name" class="btnabilities" 																							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShipClassBattleship\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Battleship </button> ';
											someText += '<button title="Ships or Bases that can rearm a Shuttle\'s Phasers" class="btnabilities"																								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShipClassCarrier\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Carrier </button> ';
											someText += '<button title="Ships or Bases that provide at least one Command Point" class="btnabilities"																							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShipClassCommandship\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Command </button> ';
											someText += '<button title="Ships or Bases with the term Cruiser in their name" class="btnabilities"																								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShipClassCruiser\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Cruiser </button> ';
											someText += '<button title="Ships or Bases that can fire their weapons in response to being fired upon" class="btnabilities"																		onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShipClassDefendership\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Defender </button> ';
											someText += '<button title="Ships or Bases with the term Destroyer in their name" class="btnabilities"  																							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShipClassDestroyer\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Destroyer </button> ';
											someText += '<button title="Ships or Bases with the term Dreadnought in their name" class="btnabilities"																							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShipClassDreadnought\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Dreadnought </button> ';
											someText += '<button title="Ships or Bases that can intercept damage intended for another unit" class="btnabilities"																				onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShipClassEscortship\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Escort </button> ';
											someText += '<button title="Ships or Bases with the term Flagship in their name" class="btnabilities"   																							onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShipClassFlagship\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Flagship </button> ';
											someText += '<button title="Ships or Bases with the term Freighter" class="btnabilities"																											onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShipClassFreighter\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Freighter </button> ';
											someText += '<button title="Ships or Bases with the term Frigate in their name" class="btnabilities"																								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShipClassFrigate\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Frigate </button> ';
											someText += '<button title="Ships or Bases that can negate the effects of a Mine card" class="btnabilities" 																						onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShipClassMineSweeper\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Mine Sweeper </button> ';
											someText += '<button title="Ships or Bases that return to the hand when discarded or the Ships or Bases that specifically support them" class="btnabilities"										onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShipClassPatrolship\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Patrol </button> ';
											someText += '<button title="Planetary Shield Bases" class="btnabilities"																															onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShipClassPlanetaryShield\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Planetary Shield </button> ';
											someText += '<button title="Pirate Cards" class="btnabilities"  																																	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropPirate\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Pirate </button> ';
											someText += '<button title="Police Cards" class="btnabilities"  																																	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PropPolice\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Police </button> ';
											someText += '<button title="Ships or Bases that can steal their Engagement Cost from an opponent Terrain" class="btnabilities"  																	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShipClassRaidership\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Resource Raider </button> ';
											someText += '<button title="Ships or Bases that provide 2+ Research Points" class="btnabilities"																									onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShipClassScienceship\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Science </button> ';
											someText += '<button title="Ships or Bases that generally provide 1 Research Point and allow you to look at your opponents hand" class="btnabilities"   											onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShipClassScoutship\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Scout </button> ';
											someText += '<button title="Cards that are Spies, boost Spies, or Ships or Bases that allow Spies to be moved to them rather than be discarded" class="btnabilities"								onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShipClassSpyship\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Spy </button> ';
											someText += '<button title="Ships or Bases that provide Supply, Energy, or Economy Points" class="btnabilities" 																					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShipClassSupplyship\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Supply </button> ';
											someText += '<button title="Ships or Bases that either (1) allow Crew to be played to them without using a Card Play or (2) can transport Crew on a There-and-Back mission" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShipClassTroopship\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Troop </button> ';
											someText += '<button title="Ships or Bases with the term Tug or Battlesled in their name" class="btnabilities"  																					onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShipClassTug\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Tug </button> ';
											someText += '<button title="Ships which fit no other category and, generally, have no special abilities and produce no resource points" class="btnabilities"										onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShipClassWarship\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Warship </button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<span style="background-color: black">&nbsp;<b>Terrain:</b></span><br>';
											someText += '<button title="Asteroids &amp; Asteroid Belts Terrain" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Asteroid\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Asteroids </button> ';
											someText += '<button title="Black Hole Terrain" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'BlackHole\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Black Hole </button> ';
											someText += '<button title="Comet Terrain" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Comet\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Comet </button> ';
											someText += '<button title="Custom Planets" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'CustomPlanet\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Custom Planets </button> ';
											someText += '<button title="Custom Systems" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'CustomSystem\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Custom Systems </button> ';
											someText += '<button title="Moon Terrain" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Moon\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Moon </button> ';
											someText += '<button title="Planet Terrain" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Planet\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Planet </button> ';
											someText += '<button title="System Terrain" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'SystemTerrain\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> System </button> ';
											someText += '<button title="Star Terrain" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'StarTerrain\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Star </button> ';
											someText += '<button title="Nebula Terrain" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Nebula\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Nebula </button> ';
											someText += '<button title="Terrain with Shields" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ShieldTerrain\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Shields </button> ';
											someText += '&nbsp;';
										someText += '</p>';
									someText += '</td>';
								someText += '</tr>';
							someText += '</table>';
		};
							someText += '<table border="0" cellpadding="1" cellspacing="1" width="100%">';
								someText += '<tr>';
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<span style="background-color: black">&nbsp;<b>Cards I Have / Will Trade:</b></span><br>';

											if (ShowWhich=="NeedsList" || ShowWhich=="HavesList") {
												someText += '<button title="Reset filter" class="btnmycards"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Reset Filters</u></b> </button> ';
											} else {
												someText += '<button title="Reset filter" class="btnmycards activemycards"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> <b><u>Reset Filter</u></b> </button> ';
											};

											if (ShowWhich=="HavesList") {
												someText += '<button title="Cards I Have" class="btnmycards activemycards"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Ihave\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Cards I Have </button> ';
											} else if (ShowWhich !== "NeedsList") {
												someText += '<button title="Cards I Have" class="btnmycards"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Ihave\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Cards I Have </button> ';
											};

											someText += '<button title="Cards I Have and am willing to Trade" class="btnmycards"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Trade\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Cards I\'ll Trade </button> ';
											someText += '<button title="Cards I don\'t Have" class="btnmycards"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Donthave\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Cards I Don\'t Have </button> ';

											if (ShowWhich=="NeedsList") {
												someText += '<button title="Cards I Need or Want" class="btnmycards activemycards"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Look4\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Cards I Need &amp; Want </button> ';
											} else {
												someText += '<button title="Cards I Need or Want" class="btnmycards"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Look4\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Cards I Need &amp; Want </button> ';
											};

											someText += '<button title="Cards I Need the most" class="btnmycards"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Need\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Cards I Need Most </button> ';
											someText += '<button title="Cards I\'d like to get, but are not a priority" class="btnmycards"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Want\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Cards I Want </button> ';
											someText += '&nbsp;';
		if (ShowWhich=="NeedsList" || ShowWhich=="HavesList") {
										someText += '</p></td></tr><tr><td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<button title="Cards I Have 1"   class="btnmycards"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Have_01\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Have 1 </button> ';
											someText += '<button title="Cards I Have 2+"  class="btnmycards"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Have_02\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Have 2+ </button> ';
											someText += '<button title="Cards I Have 10+" class="btnmycards"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Have_02_10\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Have 10+ </button> ';
											someText += '<button title="Cards I Have 20+" class="btnmycards"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Have_02_10_20\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Have 20+ </button> ';
											someText += '<button title="Cards I Have 30+" class="btnmycards"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Have_02_10_20_30\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Have 30+ </button> ';
											someText += '<button title="Cards I Have 40+" class="btnmycards"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Have_02_10_20_30_40\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Have 40+ </button> ';
											someText += '<button title="Cards I Have 50+" class="btnmycards"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Have_02_10_20_30_40_50\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Have 50+ </button> ';
											someText += '&nbsp;';
											someText += '<button title="Cards I Have More than a Playdeck of"  class="btnmycards"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PlaydeckPlus\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Have More Than a Playdeck </button> ';
											someText += '<button title="Cards I Have Exactly a Playdeck of"  class="btnmycards"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PlaydeckJust\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Have Exactly a Playdeck </button> ';
											someText += '<button title="Cards I Have Less than a Playdeck of"  class="btnmycards"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'Noplaydeck\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Have Less Than a Playdeck </button> ';
											someText += '&nbsp;';
		};
										someText += '</p>';
									someText += '</td>';
		if (ShowWhich !=="NeedsList") {
									someText += '<td valign="top">';
										someText += '<p class="buttontext">';
											someText += '<span style="background-color: black">&nbsp;<b>Psy Disciplines:</b></span><br>';
											someText += '<button title="Cards which can use either Any, Fleet, or Opponent Disciplines" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'AnyDiscipline\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Any/Fleet/Opponent </button> ';
											someText += '<button title="Cards which can use Cyber Disciplines or Cyber Field Cards" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'CyberDiscipline\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Cyber </button> ';
											someText += '<button title="Cards which can use Elder Disciplines or Elder Field Cards" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'ElderDiscipline\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Elder </button> ';
											someText += '<button title="Cards which can use Kinetic Disciplines or Kinetic Field Cards" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'KineticDiscipline\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Kinetic </button> ';
											someText += '<button title="Cards which can use Psycanti Disciplines or Psycanti Field Cards" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'PsycantiDiscipline\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Psycanti </button> ';
											someText += '<button title="Cards which can use Visonic Disciplines or Visonic Field Cards" class="btnabilities"	onclick="filterByType(xFilterByType"+n+""+n+""+n+""+n+""+n+""+n+""+n+",	\'VisonicDiscipline\'"+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+""+n+")"> Visionic </button> ';
										someText += '</p>';
									someText += '</td>';
		};
								someText += '</tr>';
							someText += '</table>';
						someText += '</div>';
			someText += '</div>';

	document.write(someText);

	var i;
	var j;

	var btnContainer = document.getElementById("myBtnContainer");
	var btns = btnContainer.getElementsByClassName("btnreaction");

	var acc = document.getElementsByClassName("booklist");
	var pnl = document.getElementsByClassName("panel");
	var str1;
	var str2;

	for (i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function() {
			str1 ="S" + this.id
			var panel = this.nextElementSibling;

			if (panel.style.display ==="block") {
							panel.style.display ="none";
							document.getElementById("TB1").innerHTML ="Hide";
							document.getElementById(str1).innerHTML ="&nbsp;+&nbsp;&nbsp;";
							for (j=0; j < pnl.length; j++) {
								acc[j].style.display ="block";
							}
				} else {
							for (j=0; j < pnl.length; j++) {
								pnl[j].style.display ="none";
								acc[j].style.display ="none";
								str2 = j+1
								str2 ="SB" + str2
								document.getElementById(str2).innerHTML ="&nbsp;+&nbsp;&nbsp;";
							}
							document.getElementById(str1).innerHTML ="&ndash;&nbsp;&nbsp;";
							document.getElementById("TB1").innerHTML ="Show";
							this.style.display ="block";
							panel.style.display ="block";
						}
						
					str2 = this.className
					for (j=0; j < pnl.length; j++){
						acc[j].className = acc[j].className.replace(" active","");
					}
					this.className = str2
					this.classList.toggle("active");
					
					var height = document.getElementById("header").offsetHeight;
					if (panel.style.display=="block") {
						height=height-10;
					} else {
						height = height+10;
					}
					if (document.getElementById("B1").style.display=="none") {
						height = height+10;
					}

					height=height-4;

					document.getElementById("content").style.marginTop = height + 'px';
					document.getElementById("spacer").style.height = height + 'px';
				});
	}

btns = btnContainer.getElementsByClassName("btnrarity");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activerarity");
			current[0].className = current[0].className.replace("activerarity","prevrarity");

			var prev = document.getElementsByClassName("mainrarity");
			prev[0].className = prev[0].className.replace(" prevrarity","");

			this.className = this.className.replace(" prevrarity","");
			this.className +=" activerarity";
		});
	};


btns = btnContainer.getElementsByClassName("mainrarity");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activerarity");
			current[0].className = current[0].className.replace(" activerarity","");
			this.className +=" activerarity";

			for (var j = 0; j < 100; j++) {
				var prev = document.getElementsByClassName("prevrarity");
				prev[0].className = prev[0].className.replace(" prevrarity","");
			}
		});
	}

btns = btnContainer.getElementsByClassName("btnstrength");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activestrength");
			current[0].className = current[0].className.replace("activestrength","prevstrength");

			var prev = document.getElementsByClassName("mainstrength");
			prev[0].className = prev[0].className.replace(" prevstrength","");

			this.className = this.className.replace(" prevstrength","");
			this.className +=" activestrength";
		});
	}

btns = btnContainer.getElementsByClassName("mainstrength");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activestrength");
			current[0].className = current[0].className.replace(" activestrength","");
			this.className +=" activestrength";

			for (var j = 0; j < 100; j++) {
				var prev = document.getElementsByClassName("prevstrength");
				prev[0].className = prev[0].className.replace(" prevstrength","");
			}
		});
	}

btns = btnContainer.getElementsByClassName("btncardtype");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activecardtype");
			current[0].className = current[0].className.replace(" activecardtype","");
			this.className +=" activecardtype";
		});
	}

btns = btnContainer.getElementsByClassName("btnreaction");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activereaction");
			current[0].className = current[0].className.replace(" activereaction","");
			this.className +=" activereaction";
		});
	}

btns = btnContainer.getElementsByClassName("btnmycards");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activemycards");
			current[0].className = current[0].className.replace(" activemycards","");
			this.className +=" activemycards";
		});
	}

btns = btnContainer.getElementsByClassName("btnartist");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activeartist");
			current[0].className = current[0].className.replace(" activeartist","");
			this.className +=" activeartist";
		});
	}

btns = btnContainer.getElementsByClassName("btndistributor");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activedistributor");
			current[0].className = current[0].className.replace(" activedistributor","");
			this.className +=" activedistributor";
		});
	}

btns = btnContainer.getElementsByClassName("btncommandpoints");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activecommandpoints");
			current[0].className = current[0].className.replace(" activecommandpoints","");
			this.className +=" activecommandpoints";
		});
	}

btns = btnContainer.getElementsByClassName("btneconomypoints");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activeeconomypoints");
			current[0].className = current[0].className.replace(" activeeconomypoints","");
			this.className +=" activeeconomypoints";
		});
	}

btns = btnContainer.getElementsByClassName("btnsupplypoints");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activesupplypoints");
			current[0].className = current[0].className.replace(" activesupplypoints","");
			this.className +=" activesupplypoints";
		});
	}

btns = btnContainer.getElementsByClassName("btnenergypoints");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activeenergypoints");
			current[0].className = current[0].className.replace(" activeenergypoints","");
			this.className +=" activeenergypoints";
		});
	}

btns = btnContainer.getElementsByClassName("btnammopoints");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activeammopoints");
			current[0].className = current[0].className.replace(" activeammopoints","");
			this.className +=" activeammopoints";
		});
	}

btns = btnContainer.getElementsByClassName("btnresearchpoints");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activeresearchpoints");
			current[0].className = current[0].className.replace(" activeresearchpoints","");
			this.className +=" activeresearchpoints";
		});
	}

btns = btnContainer.getElementsByClassName("btnrepairpoints");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activerepairpoints");
			current[0].className = current[0].className.replace(" activerepairpoints","");
			this.className +=" activerepairpoints";
		});
	}

btns = btnContainer.getElementsByClassName("btncommandcost");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activecommandcost");
			current[0].className = current[0].className.replace(" activecommandcost","");
			this.className +=" activecommandcost";
		});
	}

btns = btnContainer.getElementsByClassName("btneconomycost");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activeeconomycost");
			current[0].className = current[0].className.replace(" activeeconomycost","");
			this.className +=" activeeconomycost";
		});
	}

btns = btnContainer.getElementsByClassName("btnsupplycost");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activesupplycost");
			current[0].className = current[0].className.replace(" activesupplycost","");
			this.className +=" activesupplycost";
		});
	}

btns = btnContainer.getElementsByClassName("btnenergycost");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activeenergycost");
			current[0].className = current[0].className.replace(" activeenergycost","");
			this.className +=" activeenergycost";
		});
	}

btns = btnContainer.getElementsByClassName("btnammocost");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activeammocost");
			current[0].className = current[0].className.replace(" activeammocost","");
			this.className +=" activeammocost";
		});
	}

btns = btnContainer.getElementsByClassName("btnresearchcost");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activeresearchcost");
			current[0].className = current[0].className.replace(" activeresearchcost","");
			this.className +=" activeresearchcost";
		});
	}

btns = btnContainer.getElementsByClassName("btnrepaircost");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activerepaircost");
			current[0].className = current[0].className.replace(" activerepaircost","");
			this.className +=" activerepaircost";
		});
	}

btns = btnContainer.getElementsByClassName("btnheavyweapons");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activeheavyweapons");
			current[0].className = current[0].className.replace(" activeheavyweapons","");
			this.className +=" activeheavyweapons";
		});
	}

btns = btnContainer.getElementsByClassName("btnphasers");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activephasers");
			current[0].className = current[0].className.replace(" activephasers","");
			this.className +=" activephasers";
		});
	}

btns = btnContainer.getElementsByClassName("btncarddamage");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activecarddamage");
			current[0].className = current[0].className.replace(" activecarddamage","");
			this.className +=" activecarddamage";
		});
	}

btns = btnContainer.getElementsByClassName("btndefenses");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activedefenses");
			current[0].className = current[0].className.replace(" activedefenses","");
			this.className +=" activedefenses";
		});
	}

btns = btnContainer.getElementsByClassName("btnduplicate");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activeduplicate");
			current[0].className = current[0].className.replace(" activeduplicate","");
			this.className +=" activeduplicate";
		});
	}

btns = btnContainer.getElementsByClassName("btnresetall");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activeresetall");
			current[0].className = current[0].className.replace(" activeresetall","");
			this.className +=" activeresetall";
		});
	}

btns = btnContainer.getElementsByClassName("btnabilities");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activeabilities");
			current[0].className = current[0].className.replace("activeabilities","prevabilities");

			var prev = document.getElementsByClassName("mainabilities");
			prev[0].className = prev[0].className.replace(" prevabilities","");

			this.className = this.className.replace(" prevabilities","");
			this.className +=" activeabilities";
		});
	}

btns = btnContainer.getElementsByClassName("mainabilities");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activeabilities");
			current[0].className = current[0].className.replace(" activeabilities","");
			this.className +=" activeabilities";

			for (var j = 0; j < 100; j++) {
				var prev = document.getElementsByClassName("prevabilities");
				prev[0].className = prev[0].className.replace(" prevabilities","");
			}
		});
	}

btns = btnContainer.getElementsByClassName("btncardedition");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activecardedition");
			current[0].className = current[0].className.replace("activecardedition","prevcardedition");

			var prev = document.getElementsByClassName("maincardedition");
			prev[0].className = prev[0].className.replace(" prevcardedition","");

			this.className = this.className.replace(" prevcardedition","");
			this.className +=" activecardedition";
		});
	}

btns = btnContainer.getElementsByClassName("btnempire");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activeempire");
			current[0].className = current[0].className.replace("activeempire","prevempire");

			var prev = document.getElementsByClassName("mainempire");
			prev[0].className = prev[0].className.replace(" prevempire","");

			this.className = this.className.replace(" prevempire","");
			this.className +=" activeempire";
		});
	}

btns = btnContainer.getElementsByClassName("maincardedition");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activecardedition");
			current[0].className = current[0].className.replace(" activecardedition","");
			this.className +=" activecardedition";

			for (var j = 0; j < 100; j++) {
				var prev = document.getElementsByClassName("prevcardedition");
				prev[0].className = prev[0].className.replace(" prevcardedition","");
			}
		});
	}

btns = btnContainer.getElementsByClassName("mainempire");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(){
			var current = document.getElementsByClassName("activeempire");
			current[0].className = current[0].className.replace(" activeempire","");
			this.className +=" activeempire";

			for (var k = 0; k < 100; k++) {
				var prev = document.getElementsByClassName("prevempire");
				prev[0].className = prev[0].className.replace(" prevempire","");
			}
		});
	}

};

