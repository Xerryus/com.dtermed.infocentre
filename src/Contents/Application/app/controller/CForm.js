
App.controller.define('CForm', 
	{
		views: 
			[
				"VForm"
			],
	
		models: 
			[
				"getTraitementTable",
				"getDepartement",
				"getService",
				"getAgent",
				"getDomaine_metier",
				"getNature",
				"getSous_nature",
				"getEvolution",
				"SetBaseInsert",
				"SetBaseUpdate",
				"SetBaseModifier",
				"getBase"
			],
	
		init: function()
			{
				this.control(
					{
						"radio":
							{
								focus: "on_focus_radio"
							},
						"checkbox":
							{
								focus: "on_focus_chekbox"
							},
						"VForm": 
							{
								show: "VForm_onshow"
							},
						"combo#cbo1":
							{
								select: "cbo1_onclik"
							},
						"combo#cbo2":
							{
								select: "cbo2_onclik"
							},
						"combo#cbo3":
							{
								select: "cbo3_onclik"
							},
						"combo#cbo4":
							{
								select: "cbo4_onclik"
							},
						"combo#cbo5":
							{
								select: "cbo5_onclik"
							},
						"combo#cbo6":
							{
								select: "cbo6_onclik"
							},
						"combo#cbo7":
							{
								select: "cbo7_onclik"
							},
						"fieldcontainer#priorite":
							{
								click: "rdgpriorite_onclik"
							},
						"checkbox#chbspecial":
							{
								click: "chbspecial_onclik"
							},							
						"button#btnannuler":
							{
								click: "btnannuler_onclik"
							},
						"button#btnvalider":
							{
								click: "btnvalider_onclik"
							},
						"button#btnenregistrer":
							{
								click: "btnenregistrer_onclik"
								//click: "btnvalider_onclik"
							},
						"button#btnmodifier":
							{
								click: "btnmodifier_onclik"
							}
					});
				dat="";
			},
		on_focus_radio: function(p)
			{	
				p.up('window').phasage=p.inputValue;
				p.setValue(true);
			},
		on_focus_chekbox: function(p)
			{	
				p.up('window').special=p.inputValue;
				p.setValue(true);
				//console.log(p);
			},
		VForm_onshow: function()
			{
				//profil = 1;			
				switch ( profil )
					{
						case 1: // Profil Administrateur
							//Ext.Msg.alert('Omneedia','Profil Administrateur');
							//App.get('VForm',{height:590});							
							break ;
							
						case 2: // Profil Chef de departement
							//Ext.Msg.alert('Omneedia','Profil Chef de Département');
							//App.get('VForm',{height:490});
							App.get('panel#regroupement_z1').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('panel#regroupement_z1').hide(true);
							// efface le bouton enregistrer
							App.get('button#btnenregistrer').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('button#btnenregistrer').hide(true);
							// efface le bouton modifier
							App.get('button#btnmodifier').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('button#btnmodifier').hide(true);
							break ;
							
						case 3: // Profil Chef de service
							//Ext.Msg.alert('Omneedia','Profil Chef de Service');
							//App.get('VForm',{height:490});
							App.get('panel#regroupement_z1').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('panel#regroupement_z1').hide(true);
							App.get('panel#regroupement_z2').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('panel#regroupement_z2').hide(true);
							// efface le bouton valider
							App.get('button#btnvalider').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('button#btnvalider').hide(true);
							// Budget
							App.get('label#label_budget').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('label#label_budget').hide(true);
							App.get('label#label_budgetannuel').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('label#label_budgetannuel').hide(true);							
							App.get('textfield#textfieldbudgetannuel').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('textfield#textfieldbudgetannuel').hide(true);
							App.get('textfield#textfieldbudgetactuel').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('textfield#textfieldbudgetactuel').hide(true);							
							break ;
							
						case 4: // Profil utilisateur
							//Ext.Msg.alert('Omneedia','Profil Utilisateur');
							//App.get('VForm',{height:590});
							// Cache regroupement_z1
							App.get('panel#regroupement_z1').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('panel#regroupement_z1').hide(true);
							// Cache regroupement_z2
							App.get('panel#regroupement_z2').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('panel#regroupement_z2').hide(true);
							// Cache regroupement_z4
							App.get('panel#regroupement_z4').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('panel#regroupement_z4').hide(true);							
							// Cache regroupement_z5
							App.get('panel#regroupement_z5').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('panel#regroupement_z5').hide(true);							
							// Cache regroupement_z6
							App.get('panel#regroupement_z6').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('panel#regroupement_z6').hide(true);							
							// Cache regroupement_z7
							App.get('panel#regroupement_z7').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('panel#regroupement_z7').hide(true);							
							// Cache regroupement_z8
							App.get('panel#regroupement_z8').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('panel#regroupement_z8').hide(true);							
							// Cache regroupement_z9
							App.get('panel#regroupement_z9').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('panel#regroupement_z9').hide(true);
							// Budget
							App.get('label#label_budget').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('label#label_budget').hide(true);
							App.get('label#label_budgetannuel').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('label#label_budgetannuel').hide(true);
							App.get('textfield#textfieldbudgetannuel').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('textfield#textfieldbudgetannuel').hide(true);
							App.get('textfield#textfieldbudgetactuel').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('textfield#textfieldbudgetactuel').hide(true);
							// efface le bouton modifier
							App.get('button#btnmodifier').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('button#btnmodifier').hide(true);
							break ;							
					};		

			},
		cbo1_onclik: function()
			{
				var id=App.get('combo#cbo1').getValue();
				App.get('combo#cbo2').setValue('');
				App.get('combo#cbo2').getStore().getProxy().extraParams.id=id;
				App.get('combo#cbo2').getStore().load();
				App.get('combo#cbo3').setValue('');
			},
		cbo2_onclik: function()
			{
				var store = App.get('combo#cbo3').getStore();
				store.getProxy().extraParams.kuni=App.get('combo#cbo1').getValue();
				store.getProxy().extraParams.ksub=App.get('combo#cbo2').getValue();
				store.on('load', function() 
					{
						if (store.data.items[0].data.Kage!=-1) store.insert(0, 
							[
								{
									Kage: "-1",
									NomPre: "Autres..."
								}
							]);
					});
				store.load();				
			},
		cbo3_onclik: function()
			{
					if (App.get('combo#cbo3').getValue() == -1) 
						{
							App.get('textfield#textfieldsaisiemanuelle').show();
							App.get('button#btnsaisiemanuelle').show();
						} else 
							{
								App.get('textfield#textfieldsaisiemanuelle').hide();
								App.get('button#btnsaisiemanuelle').hide();
							}
			},
		cbo4_onclik: function()
			{
				var id=App.get('combo#cbo4').getValue();
				App.get('combo#cbo5').setValue('');
				App.get('combo#cbo5').getStore().getProxy().extraParams.id=id;
				App.get('combo#cbo5').getStore().load();				
			},
		cbo5_onclik: function()
			{
				//Ext.Msg.alert('Omneedia',App.get('combo#cbo5').getValue());
			},
		cbo6_onclik: function()
			{
				var id=App.get('combo#cbo6').getValue();
				App.get('combo#cbo4').setValue('');
				App.get('combo#cbo4').getStore().getProxy().extraParams.id=id;
				App.get('combo#cbo4').getStore().load();

			},
		cbo7_onclik: function()
			{
				//Ext.Msg.alert('Omneedia',App.get('combo#cbo7').getValue());

			},
		rdgpriorite_onclik: function()
			{
				//Ext.Msg.alert('Omneedia',App.get('priorite').getValue());			
			},
		chbspecial_onclik: function()
			{
				//Ext.Msg.alert('Omneedia',App.get('checkbox#chbspecial').getValue());
			},
		btnannuler_onclik: function()
			{
				App.get('VForm').close();
			},
		btnvalider_onclik: function( p ) // pour valider une demande avec son Px definitif
			{
						var rdgvalue=-1;
						var val_chbspecial=0;
						// Traiment de la zone des radios boutons
						if (App.get('radio#RP0').getValue()) rdgvalue=0;
						if (App.get('radio#RP1').getValue()) rdgvalue=1;
						if (App.get('radio#RP2').getValue()) rdgvalue=2;
						if (App.get('radio#RP3').getValue()) rdgvalue=3;						
						//Traitement de la case à cocher special
						if (App.get('checkbox#chbspecial').getValue()) val_chbspecial=1 ;												
						// Implementation des regles de gestions selon le profil et l'operation de validation						
						if ( profil == 1 ) 
							{
								var valeur_etape = 3; // Definition du numero de l'etape selon le profil qui va valider
								var valeur_etape_valide = 1; //
								var valeur_annulation = 0; //
								var valeur_priorite_valide = 1;								
							};
						if ( profil == 2 ) 
							{
								var valeur_etape = 2; // Definition du numero de l'etape selon le profil qui va valider
								var valeur_etape_valide = 1; //
								var valeur_annulation = 0; //
								var valeur_priorite_valide = 1;								
							};
						if ( profil == 3 ) 
							{
								var valeur_etape = 1; // Definition du numero de l'etape selon le profil qui va valider
								var valeur_etape_valide = 0; //
								var valeur_annulation = 0; //
								var valeur_priorite_valide = 0; //
							};												
						var o= {						
									phasage: rdgvalue,// radiogroup#rdgpriorite P0,P1,P2,P3,P4 Priorité
									//libelle_commande: App.get('textarea#txtalibelledemande').getValue(), // à definir
									//motivation_demande: App.get('textfield#txtfmotivation').getValue(),
									//commentaire_demande: App.get('textarea#txtalibelledemande').getValue(),
									priorite_valide: valeur_priorite_valide,// Validé par le chef de Dpt si =1 et non validé si =0
									etape_valide: valeur_etape_valide, // Validé par le chef de Dpt si =1 et non validé si =0
									//priorite_niveau: "-1", // à definir
									avancement: valeur_etape, // Etape en cours							
									special: val_chbspecial, // Valeur à 1 si coché sinon 0
									//annulation: App.get('false').getValue(), // à definir
									annulation: valeur_annulation, // 1 si annulé 0 si non annulé
									ID_demande: UPDATE_ID
								};
						App.TraitementTable.acces_infocentre2015_base_update(o,function(error,result)
							{
								if(error) Ext.Msg.alert('Mise à jour','données mises à jour');
								App.get("grid#grid_Base").getStore().load();
							});							
						App.get('VForm').close();						
						Ext.Msg.alert('Mise à jour','données mises à jour');
			},
		btnenregistrer_onclik: function(p) // pour créer un nouvel enregistrement de demande
			{
			
				var o= {						
							service: App.get('combo#cbo2').getValue(),
							departement: App.get('combo#cbo1').getValue(),
							agent_demandeur: App.get('combo#cbo3').getValue(),
							agent_beneficiaire: App.get('combo#cbo3').getValue(),
							budget_annuel: "12345678",
							budget_actuel: "2546",
							date_de_demande: Date.now(),
							nature: App.get('combo#cbo4').getValue(),							
							sous_nature: App.get('combo#cbo5').getValue(),
							evolution: App.get('combo#cbo7').getValue(),
							quantite: App.get('numberfield#numberfieldquantite').getValue(),
							phasage: p.up('window').phasage,// radiogroup#rdgpriorite P0,P1,P2,P3,P4 Priorité
							libelle_commande: App.get('textarea#txtalibelledemande').getValue(),
							motivation_demande: App.get('textfield#txtfmotivation').getValue(),
							commentaire_demande: App.get('textarea#txtalibelledemande').getValue(),
							commentaire_s2i: App.get('textarea#txtacommentaire').getValue(),
							//etat_s2i: App.get('').getValue(), // à definir
							etat_s2i: "0",
							priorite_valide: "0",
							//etape_valide: App.get('').getValue(), // à definir
							etape_valide: "-1",
							priorite_niveau: p.up('window').phasage,
							avancement: "1",							
							special: p.up('window').special,
							//annulation: App.get('false').getValue(), // à definir
							annulation: "false",
							cloture: "false",
							annee_budget: "2015",					
							domaine_metier: App.get('combo#cbo6').getValue()
						};			
				App.TraitementTable.acces_infocentre2015_base_insert(o,function(error,result)
					{
						if (error.insertId) Ext.Msg.alert('Insertion','données inseré');
						App.get("grid#grid_Base").getStore().load();
					});
				App.get('VForm').close();
								
			},

		btnmodifier_onclik: function(p) // pour modifier unenregistrement
			{
				var o= {						
					service: App.get('combo#cbo2').getValue(),
					departement: App.get('combo#cbo1').getValue(),
					agent_demandeur: App.get('combo#cbo3').getValue(),
					agent_beneficiaire: App.get('combo#cbo3').getValue(),
					budget_annuel: "12345678",
					budget_actuel: "2546",
					date_de_demande: Date.now(),
					nature: App.get('combo#cbo4').getValue(),							
					sous_nature: App.get('combo#cbo5').getValue(),
					evolution: App.get('combo#cbo7').getValue(),
					quantite: App.get('numberfield#numberfieldquantite').getValue(),
					phasage: p.up('window').phasage,// radiogroup#rdgpriorite P0,P1,P2,P3,P4 Priorité
					libelle_commande: App.get('textarea#txtalibelledemande').getValue(),
					motivation_demande: App.get('textfield#txtfmotivation').getValue(),
					commentaire_demande: App.get('textarea#txtalibelledemande').getValue(),
					commentaire_s2i: App.get('textarea#txtacommentaire').getValue(),
					//etat_s2i: App.get('').getValue(), // à definir
					etat_s2i: "0",
					priorite_valide: "0",
					//etape_valide: App.get('').getValue(), // à definir
					etape_valide: "-1",
					priorite_niveau: p.up('window').phasage,
					avancement: "1",							
					special: p.up('window').special,
					//annulation: App.get('false').getValue(), // à definir
					annulation: "false",
					cloture: "false",
					annee_budget: "2015",					
					domaine_metier: App.get('combo#cbo6').getValue()
						};
				Ext.Msg.alert('Omneedia',o.service);
			}
			
			
	});
