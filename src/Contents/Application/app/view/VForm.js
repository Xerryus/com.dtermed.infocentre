
App.view.define('VForm', 
	{
		extend: 'Ext.window.Window',
		alias : 'widget.VForm',
		x:50,
		y:50,
		//height: 590, //418
		width: 400, // 400
		closable: true,
		draggable: true,
		resizable: false,
		closeAction: 'destroy',
		labelWidth: 125,
		hidden: true,
		frame: false,
		title: 'Infocentre',
		bodyStyle:'padding:5px 5px 0',
		width: 420, // 420
		bbar: 
		[					
			{
				xtype: "button",
				itemId: "btnvalider",
				text: "Valider"
			},			
			{
				xtype: "button",
				itemId: "btnenregistrer",
				text: "Enregistrer"
			},
			'->',			
			{
				xtype: "button",
				itemId: "btnmodifier",
				text: "Modifier"
			},
			{
				xtype: "button",
				itemId: "btnannuler",
				text: "Annuler"
			}
		],
		tbar: 
		[
			{
				xtype: 'label', // Object text Budget annuel
				itemId: 'label_budget',
				text: 'Budget annuel : ',
				margin:
					{
						//top: 30
						//bottom: 5,
						left: 20
						//right: 10
					}
			},		
			{
				xtype: "textfield", // Object text Budget annuel
				itemId: "textfieldbudgetannuel",				
				width: 70
				//fieldLabel: "Budget",
				//labelAlign: "left"
/* 				margin:
					{
						top: 5,
						bottom: 5,
						left: 20,
						right: 10
					}, */
			},
			{
				xtype: 'label', // Object text Budget annuel
				itemId: 'label_budgetannuel',
				text: 'Budget Actuel : ',
				margin:
					{
						//top: 30
						//bottom: 5,
						left: 10
						//right: 10
					}
			},	
			{
				xtype: "textfield", // Object text Budget actuel
				itemId: "textfieldbudgetactuel",
				width: 70
/* 				margin:
					{
						top: 22,
						bottom: 5,
						left: 60,
						right: 10
					} */
			},
			{
				xtype: "label", // Object text Budget actuel
				itemId: "labelannee",
				text: 'Année: 2015',
				width: 64,
				margin:
					{
						//top: 22,
						//bottom: 5,
						left: 10
						//right: 10
					}
			}
		],
		defaults: 
			{
				width: 420
			},
//====================================
		items: 
			[	
				{
					layout: "vbox",
					width: 420,
					margin: 
						{ 
							top: -5,
							bottom: 0,
							left: -5,
							right: 0	
						},
					border: false,
					items: 
						[

//-- 1 eme zone hbox ( debut )										
							{
								layout: "hbox",
								itemId: "regroupement_z1",								
								width: 400, // "100%"
								margin:
									{
										top: 0,
										bottom: 0,
										left: 0,
										right: 0
									},
								border: false,
								items:
									[								
										{
											xtype: "combo", // Object combobox table departement
											itemId: "cbo1",
											labelAlign: "top",
											fieldLabel: "Département",											
											//allowBlank: false,
											flex: 1,
											margin:
												{
													top: 5,
													bottom: 5,
													left: 20,
													right: 10
												},
											displayField: "LibUni", // Valeur de la liste
											valueField: "Kuni", // Colonne Age de la table (Affichage dans la boite message d'alerte)
											store: App.store.create('getDepartement', // Creation du store
												{
													autoLoad: true
												})
										}
									]	
							},
//-- 1 eme zone hbox ( fin )
//-- 2 eme zone hbox ( debut )
							{
								layout: "hbox",
								itemId: "regroupement_z2",
								width: 400, // "100%"
								margin:
									{
										top: 0,
										bottom: 0,
										left: 0,
										right: 0
									},
								border: false,
								items:
									[									
										{
											xtype: "combo", // Object combobox table Service
											itemId: "cbo2",
											labelAlign: "top",
											fieldLabel: "Service",
											//allowBlank: false,
											flex: 1,
											margin:
												{
													top: 5,
													bottom: 5,
													left: 20,
													right: 10
												},
											displayField: "LibSub", // Valeur de la liste
											valueField: "Ksub", // Colonne Age de la table (Affichage dans la boite message d'alerte)
											store: App.store.create('getService')
										}
									]	
							},
//-- 2 eme one hbox ( fin )
//-- 3 eme zone hbox ( debut )										
							{
								layout: "hbox",
								itemId: "regroupement_z3",
								width: 400,
								margin:
									{
										top: 0,
										bottom: 0,
										left: 0,
										right: 0
									},
									border: false,
								items:
									[								
										{
											xtype: "combo", // Object combobox table Beneficiaire
											itemId: "cbo3",
											labelAlign: "top",
											fieldLabel: "Bénéficiaire",
											//allowBlank: false,
											margin:
												{
													top: 5,
													bottom: 5,
													left: 20,
													right: 10
												},
											displayField: "NomPre", // Valeur de la liste										
											valueField: "Kage", // Colonne Age de la table (Affichage dans la boite message d'alerte)
											store: App.store.create('getAgent', // Creation du store
												{
													autoLoad: false
												})
										},
										{
											xtype: "button",
											itemId: "btnsaisiemanuelle",
											text: "Saisie",
											hidden: true,
											margin:
												{
													top: 23,
													//bottom: 5,
													left: 10
													//right: 10
												}
										},
										{
											xtype: "textfield", // Object text Budget annuel
											itemId: "textfieldsaisiemanuelle",
											hidden: true,
											width: 140,
											//fieldLabel: "Budget",
											//labelAlign: "left"
											margin:
												{
													top: 23,
													//bottom: 5,
													left: 20
													//right: 10
												}
										},
										{
											xtype: 'progressbar',
											itemId: "progbAvancement",
											//labelAlign: "top",
											//fieldLabel: "Avancement",
											width: 100,
											margin:
												{
													top: 23,
													//bottom: 5,
													left: 12
													//right: 10
												}
										},
										{
											xtype: "button",
											itemId: "btninstallation",
											text: "Installation",
											margin:
												{
													top: 23,
													//bottom: 5,
													left: 30
													//right: 10
												}
										}
									]	
							},
//-- 3 eme zone hbox ( fin )
//-- 4 eme zone hbox ( debut )										
							{
								layout: "hbox",
								itemId: "regroupement_z4",
								width: 400,
								margin:
									{
										top: 0,
										bottom: 0,
										left: 0,
										right: 0
									},
									border: false,
								items:
									[
										{
											xtype: "combo", // Object combobox table objet
											itemId: "cbo6",
											labelAlign: "top",
											fieldLabel: "Domaine métier",
											//allowBlank: false,											
											margin:
												{
													top: 5,
													bottom: 5,
													left: 20,
													right: 0
												},
											displayField: "libelle_domaine_metier", // Valeur de la liste
											valueField: "ID_domaine_metier", // Colonne Age de la table (Affichage dans la boite message d'alerte)
											store: App.store.create('getDomaine_metier', // Creation du store
												{
													autoLoad: true
												})
										},									
										{
											xtype: "combo", // Object combobox table objet
											itemId: "cbo4",
											labelAlign: "top",
											fieldLabel: "Nature",
											//allowBlank: false,
											margin:
												{
													top: 5,
													bottom: 5,
													left: 75,
													right: 10
												},
											displayField: "libelle_nature", // Valeur de la liste
											valueField: "ID_nature", // Colonne Age de la table (Affichage dans la boite message d'alerte)
											store: App.store.create('getNature') //, Creation du store
/* 												{
													autoLoad: true
												}) */
										}										
									]	
							},
//-- 4 eme zone hbox ( fin )
//-- 5 eme zone hbox ( debut )										
							{
								layout: "hbox",
								itemId: "regroupement_z5",
								width: 400,
								margin:
									{
										top: 0,
										bottom: 0,
										left: 0,
										right: 0
									},
									border: false,
								items:
									[										
										{
											xtype: "combo", // Object combobox table objet
											itemId: "cbo5",
											labelAlign: "top",
											fieldLabel: "Sous Nature",
											//allowBlank: false,
											//width: 20,
											margin:
												{
													top: 5,
													bottom: 5,
													left: 20,
													right: 0
												},
											displayField: "libelle_sous_nature", // Valeur de la liste
											valueField: "ID_sous_nature", // Colonne Age de la table (Affichage dans la boite message d'alerte)
											store: App.store.create('getSous_nature', // Creation du store
												{
													autoLoad: true
												})
										},
										{
											xtype: "combo", // Object combobox table objet
											itemId: "cbo7",
											labelAlign: "top",
											fieldLabel: "Evolution",
											//allowBlank: false,
											//width: 20,
											margin:
												{
													top: 5,
													//bottom: 5,
													left: 15,
													right: 0
												},
											displayField: "libelle_evolution", // Valeur de la liste
											valueField: "ID_evolution", // Colonne Age de la table (Affichage dans la boite message d'alerte)
											store: App.store.create('getEvolution', // Creation du store
												{
													autoLoad: true
												})
										},
										{
											labelAlign: "top",
											fieldLabel: "Quantité",
											//labelWidth: 50,
											xtype: 'numberfield',
											itemId: 'numberfieldquantite',								
											width: 45, //40
											minValue: 1,
											maxValue: 100,
											//step: 1.0 ,
											value: 1,
											margin:
												{
													top: 5,
 													//bottom: 0,
													left: 15
													//right: 0
												}											
										}
									]	
							},
//-- 5 eme zone hbox ( fin )
//-- 6 eme zone hbox ( debut )										
							{
								layout: "vbox",
								itemId: "regroupement_z6",
								width: 400,
								margin:
									{
										top: 0,
										bottom: 0,
										left: 0,
										right: 0
									},
									border: false,
									hidden: false,
								items:
									[
										{
											xtype: "textfield", // Object text libellé de la demande
											itemId: "txtfmotivation",
											width: 370,
											fieldLabel: "Objet et/ou Motivation de la demande (obligatoire)",
											//allowBlank: false,
											labelAlign: "top",
											margin:
												{
													top: 5,
													bottom: 5,
													left: 20,
													right: 10
												}
										}
									]	
							},
//-- 6 eme zone hbox ( fin )
//-- 7 eme zone hbox ( debut )
							{
								layout: "vbox",
								itemId: "regroupement_z6",
								width: 400,
								margin:
									{
										top: 0,
										bottom: 0,
										left: 0,
										right: 0
									},
									border: false,
									hidden: false,
								items:
									[									
										{
											xtype: "textarea", // Object text libellé de la demande
											itemId: "txtalibelledemande",
											width: 370,
											fieldLabel: "Détails complémentaires de la demande (saisie par le service)",
											labelAlign: "top",
											margin:
												{
													top: 5,
													bottom: 5,
													left: 20,
													right: 10
												}
										}
									]	
							},
//-- 7 eme zone hbox ( fin )
//-- 7bis eme zone hbox ( debut )										
							{
								layout: "hbox",
								itemId: "regroupement_z7",
								width: 400,
								height: 4,
								margin:
									{
										top: 0,
										bottom: 0,
										left: 0,
										right: 0
									},
									border: false,
								items:
									[								

									]	
							},
//-- 7bis eme zone hbox ( fin )
//-- 8 eme zone hbox ( debut )										
							{
								layout: "hbox",
								width: 400, // "100%"
								itemId: "regroupement_z8",
								border: false,
								items:
									[								
										//--- debut radiofield ---										
										{
											xtype: 'label', //
											itemId: 'label_phasage',
											text: 'Phasage : ',
											width: 54,
											margin: 
												{
													left: 20
												}
										},
										{ //--- Début zone radio bouton ---											
											xtype: 'radiogroup',
											itemId: "rdgpriorite",
											flex: 1,
											// Arrange radio buttons sur 2 columns, vertical
											columns: 5,
											vertical: true,
											items: 
												[
													{
														boxLabel: 'P0',
														itemId: "RP0",
														name: 'rb',
														inputValue: '0',
														style: { color: 'red' }
													}, 
													{
														boxLabel: 'P1',
														itemId: "RP1",
														name: 'rb',
														inputValue: '1',
														style: { color: 'orange' }
														
													}, 
													{
														boxLabel: 'P2',
														itemId: "RP2",
														name: 'rb',
														inputValue: '2',
														style: { color: 'green' }
													}, 
													{
														boxLabel: 'P3',
														itemId: "RP3",
														name: 'rb',
														inputValue: '3',
														style: { color: 'purple' },
														checked: true
													}
												]
										},//--- fin zone radio bouton ---
										//-------------------------
										{
											xtype: 'checkbox',
											itemId: "chbspecial",
											boxLabel: 'P5 ( Spécial )',
											inputValue: '1',
											//checked: false,
											margin:
												{
													top: 0,
													bottom: 0,
													left: 0,
													right: 12 //10
												},
											style: { color: 'brown' }
										}
										//-------------------------
									]	
							},
//-- 8 eme zone hbox ( fin )
//-- 9 eme zone hbox ( debut )										
							{
								layout: "hbox",
								itemId: "regroupement_z9",
								width: 400,
								margin:
									{
										top: 0,
										bottom: 0,
										left: 0,
										right: 0
									},
									border: false,
								items:
									[								
										{
											xtype: "textarea", // Object text commentaire obsvervation
											itemId: "txtacommentaire",
											width: 370,
											fieldLabel: "Commentaire / Observation (SII)",
											labelAlign: "top",
											margin:
												{
													top: 5,
													bottom: 5,
													left: 20,
													right: 10
												},
										}
									]	
							}
//-- 9 eme zone hbox ( fin )
						]
				}
			]
//====================================
	});