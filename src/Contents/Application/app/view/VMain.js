App.view.define('VMain', 
	{
		extend: 'Ext.Panel',
		alias : 'widget.mainform',
		border: false,
		layout: "border",	
		items: 
			[
				{
					region: 'north',
					height: 25,
					minHeight: 25,
					border:false,
					baseCls: 'cls-header',
					xtype: "Menu",
					itemId: "MenuPanel",
					menu: [
							{
								xtype: "button", // Object type bouton
								itemId: "btnajouter",
								text: "Ajouter"

							},		
							{
								xtype: "button",
								itemId: "btnmodifier",
								text: "Modifier"
							},
							//'->',
							{
								itemId: 'MenuDemande',
								text: "Demande",
									menu: [
											{
												itemId: 'menuNouvelleDemande',
												text: "Nouvelle"
/* 													menu: [
															{
																text: "Projet"
															},
															{
																text: "Close Projet"
															}
														  ] */
											},
											{
												itemId: "menuMiseajourDemande",
												text: "Mise à jour"
											},
											{
												itemId: "menuAnnulatonDemande",
												text: "Annulation"
											}											
										   ]
							},						
							{
								text: "Edition liste",
									menu: [
											{
												itemId: "editionCopier",
												text: "Copier"
											},
											{
												itemId: "editionCouper",
												text: "Couper"
											},
											{
												itemId: "editionColler",
												text: "Coller"
											}
										  ]
							},							
							{
								text: "Affichage",
									menu: [
											{
												itemId: "affichageZoomplus",
												text: "Zoom+"
											},
											{
												itemId: "affichageZoomMoins",
												text: "Zoom-"
											}
										  ]
							},							
							{
								text: "Aide",
									menu: [
											{
												itemId: "aideApropos",
												text: "A propos"
											}
										  ]
							}/*,
							{
								xtype: "label",
								text: "Année budgétaire :",
								margin:
									{
										top: 0,
										bottom: 0,
										left: 20,
										right: 0
									}
							},
							{
								xtype: "label",
								text: "____",
								itemId: "annee",
								margin:
									{
										top: 0,
										bottom: 0,
										left: 4,
										right: 0
									}
							},*/
//-------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------							
						  ]		// Fin du menu
				},		
				{
					region: "center",			
					split:true,
					layout: "fit",
					items: 
						[
 							{
								xtype: "grid", // Composant de type grille
								itemId: "grid_Base", // grid services
								width: "100%",
								/*height: 400,*/
								tbar:[
									'->',
							{
								xtype: "label",
								text: "Année budgétaire :",
								margin:
									{
										top: 0,
										bottom: 0,
										left: 20,
										right: 10
									}
							},
								{
											xtype: "combo", // Object combobox table departement
											labelAlign: "top",
											//fieldLabel: "Département",
											itemId: "cboAnnee_budgetaire",
											width: 60,
											//allowBlank: false,
											//flex: 1,
											margin:
												{
													//top: 5,
													bottom: 5,
													//left: 20,
													right: 10
												},
											displayField: "cle_annee", // Valeur de la liste
											valueField: "ID_annee_budgetaire", // Colonne Age de la table (Affichage dans la boite message d'alerte)
											store: App.store.create('getAnneebudgetaire', // Creation du store
												{
													autoLoad: true
												}
												)
										
								}
								],
								columns: 
									[
  									
										{
											text: "Année budg.", //
											itemId: "col_annee_budgetaire",
											dataIndex: "annee_budget", // Valeur de la table
											hidden: true
										},
										{
											text: "Departement", //
											dataIndex: "LibUni", // Valeur de la table
											width: 125,
											hidden: true
										},										
										{
											text: "Service", //
											dataIndex: "LibSub", // Valeur de la table
											width: 130,
											//hidden: true
											locked   : true
										},
										{
											text: "Demandeur", //
											dataIndex: "agent_demandeur", // Valeur de la table
											hidden: true
										},
 										{
											text: "Beneficiaire", //
											dataIndex: "NomPre", // Valeur de la table
											width: 120,
											locked   : true
										},
 										{
											text: "Budget annuel", //
											dataIndex: "budget_annuel", // Valeur de la table
											hidden: true
										},
 										{
											text: "Budget actuel", //
											dataIndex: "budget_actuel", // Valeur de la table
											hidden: true
										},	
 										{
											text: 'Demandé le', //
											dataIndex: 'date_de_demande', // Valeur de la table
											//type: 'datetime',
											//type: 'date',
											//xtype: 'datecolumn',
											//type: 'datecolumn',
											//format: 'y/m/d',
											//format: 'Y-m-d H:i',
											//format: 'Y-m-d',
											//dateFormat: 'yyyy-MM-ddTHH:mm:ss.SSSZ',
											//dateFormat: 'time',
											//dateFormat: 'date',
											//renderer: Ext.util.Format.dateRenderer('d/m/Y'),
											//renderer: Ext.util.Format.dateRenderer('Y-m-d H:i'),
											renderer: function(value) {
												var dd=value.split('T')[0];
												return dd.split('-')[2]+'/'+dd.split('-')[1]+'/'+dd.split('-')[0];
											},
											//renderer: Ext.util.Format.dateRenderer('Y-m-d'),
											width: 70,											
											locked   : true
											//hidden: true
										},
										{
											text: "Modifié le", //
											dataIndex: "date_modif", // Valeur de la table
											//format: 'y/m/d',
											renderer: function(value) 
												{
													var dd=value.split('T')[0];
													return dd.split('-')[2]+'/'+dd.split('-')[1]+'/'+dd.split('-')[0];
												},
											width: 70,
											//hidden: true
											locked   : true
										},
										{
											text: "Domaine metier", //
											dataIndex: "libelle_domaine_metier", // Valeur de la table
											width: 90
										},										
 										{
											text: "Nature", //
											dataIndex: "libelle_nature", // Valeur de la table
											width: 90											
										},
 										{
											text: "Sous nature", //
											dataIndex: "libelle_sous_nature", // Valeur de la table
											width: 110
										},
 										{
											text: "Evolution", //
											dataIndex: "libelle_evolution", // Valeur de la table
											width: 90
										},
 										{
											text: "Qté", //
											dataIndex: "quantité", // Valeur de la table
											width: 30
										},
 										{
											text: "Priorité (Phasage)", //
											dataIndex: "libelle_priorite", // Valeur de la table
											width: 140
										},
 										{
											text: "Valide", //
											dataIndex: "priorite_valide", // Valeur de la table
											width: 40											
											//hidden: true
										},										
 										{
											text: "Motivation", //
											dataIndex: "motivation_demande" // Valeur de la table
										},
										{
											text: "Libellé de la demande", //
											dataIndex: "libelle_commande", // Valeur de la table
											hidden: true
										},

 										{
											text: "Commentaire Departement", //
											dataIndex: "commentaire_demande", // Valeur de la table
											hidden: true
										},
 										{
											text: "Commentaire S2i", //
											dataIndex: "commentaire_S2i", // Valeur de la table
											hidden: true
										},
 										{
											text: "Etat S2i", //
											dataIndex: "etat_S2i", // Valeur de la table
											hidden: true
										},
//------------------------------------------------
 										{
											text: "etape_valide", //
											dataIndex: "etape_valide", // Valeur de la table
											hidden: true
										},
 										{
											text: "priorite_niveau", //
											dataIndex: "priorite_niveau", // Valeur de la table
											hidden: true
										},
 										{
											text: "Etape", //
											dataIndex: "avancement", // Valeur de la table
											width: 35
										},
 										{
											text: "Prix", //
											dataIndex: "prix_sous_nature", // Valeur de la table
											width: 40
										},										
 										{
											text: "P05", //
											dataIndex: "special", // Valeur de la table
											width: 30
										},
 										{
											text: "Annulation", //
											dataIndex: "annulation", // Valeur de la table
											hidden: true
										},
 										{
											text: "Cloture", //
											dataIndex: "cloture", // Valeur de la table
											width: 50
										}
									
									],							 
								store: App.store.create('getAffichegrid01', // Creation du store
									{
										autoLoad: true,
										listeners: {
											load: function(p)
											{
												//autoLoad: true
												
											}
										}
									})					
							} 
							
						]
				},

				{
					region: "south",			
					split:true,
					items: 
						[

						]
				}	
			]	
	});
