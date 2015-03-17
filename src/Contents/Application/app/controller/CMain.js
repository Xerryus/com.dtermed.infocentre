App.controller.define('CMain', 
	{
		views: 
			[
				"VMain"
			],
	
		models: 
			[
				"getAgent",
				"getBase",
				"getAffichegrid01",
				"getAffichegrid02",
				"getAnneebudgetaire"
			],
	
		init: function()
			{
				this.control(
					{
						"menu>menuitem": 
							{
								click: "Menu_onClick"
							},
						"button#clickme": 
							{
								click: "clickme_onclick"
							},
						"combo#cboAnnee_budgetaire":
							{
								select: "cboAnnee_budgetaire_onclik"
							},
						"grid#grid_Base":
							{
								select: "grid_onselect" 
							}
					});
		
				App.init('VMain',this.onLoad);
				dat=""; // Pour stocker le record
			},
	
		Menu_onClick: function(p)
			{
				//console.log(p);
/* 				if (p.itemId) 
					{
						Ext.Msg.alert('Status', 'Click event on '+p.itemId);
					}; */
				if (p.itemId == 'menuNouvelleDemande')
					{
						this.btnajouter_onclick();
						App.get('progressbar#progbAvancement').hide(true); // cache la progressbar de progression				
						App.get('button#btnvalider').setVisible(false); // cache le bouton valider
					};
				if (p.itemId == 'menuMiseajourDemande')
					{
						this.grid_onselect();
					};
				
			},
		clickme_onclick: function()
			{
				Ext.Msg.alert('Omneedia','hello world!');
			},
		btnajouter_onclick: function()
			{				
				App.view.create('VForm',
					{
						modal: true,
						_title: 'Formulaire Saisie Ajouter',
						//height: 490,
						labels:
							[
				
							]
					}).show();
			},
		btnmodifier_onclick: function()
			{
				App.view.create('VForm',
					{
						modal: true,
						_title: 'Formulaire Saisie Modifier',
						labels:
							[
				
							]
					}).show();
			},
		onLoad: function()
			{
				profil = parseInt(document.location.href.split('?profil=')[1].trim());
				//console.log(p); 
				switch ( profil ) // En fonction du profil entré 1-->4
					{
						case 1: 
							Ext.Msg.alert('Omneedia','Profil Administrateur'); // Affichage du profil
							//App.get('VForm',{height:590});
							App.get('button#btnajouter').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('button#btnajouter').hide(true);
							App.get('button#btnmodifier').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('button#btnmodifier').hide(true);							
							break ;
						case 2: 
							Ext.Msg.alert('Omneedia','Profil Chef de Département'); // Affichage du profil
							//App.get('VForm',{height:490});
							App.get('button#btnajouter').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('button#btnajouter').hide(true);
							App.get('button#btnmodifier').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('button#btnmodifier').hide(true);
							App.get('menu>menuitem#menuNouvelleDemande').hide(true);							
							break ;
						case 3:
							Ext.Msg.alert('Omneedia','Profil Chef de Service'); // Affichage du profil
							//App.get('VForm',{height:490});
							App.get('button#btnajouter').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('button#btnajouter').hide(true);
							App.get('button#btnmodifier').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('button#btnmodifier').hide(true);
							App.get('menu>menuitem#menuMiseajourDemande').hide(true);							
							break ;
						case 4: 
							Ext.Msg.alert('Omneedia','Profil Utilisateur'); // Affichage du profil
							//App.get('VMain',{height:590});
							App.get('button#btnajouter').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('button#btnajouter').hide(true);
							App.get('button#btnmodifier').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('button#btnmodifier').hide(true);
							App.get('Menu').hide(true);
							break ;							
					};
			},
		ShowGrid: function() 
			{

			},
//------------------------------------------------------------------------------------------------------
	VForm_onshow: function()
		{

		},

	cboAnnee_budgetaire_onclik: function()
		{
/* 				var id=App.get('combo#cboAnnee_budgetaire').getValue();
				App.get('grid#grid_Base').setValue('');
				App.get('grid#grid_Base').getStore().getProxy().extraParams.id=id;
				App.get('grid#grid_Base').getStore().load();
				ID_annee_budgetaire
*/
			var id=App.get('combo#cboAnnee_budgetaire').getValue();
			//Ext.Msg.alert('Status', 'Click event on '+id);
/* 
			store: App.store.create('getAffichegrid02', // Creation du store
				{
					//autoLoad: true,
					App.get("grid#grid_Base").getStore().load();
				})
 */				
			//App.get("grid#grid_Base").getStore().load();
/* 			
			App.TraitementTable.acces_infocentre2015_base_update(o,function(error,result)
				{
					if(error) Ext.Msg.alert('Mise à jour','données mises à jour');
					App.get("grid#grid_Base").getStore().load();
				});
				
			App.get('VForm').close();						
			Ext.Msg.alert('Mise à jour','données mises à jour'); 
 */
		},
		
	grid_onselect: function(p, record) // quand on clique sur un enregistrement dans le tableau
		{
			if ( profil != 4 )
				{
					App.view.create('VForm', // on affiche le formulaire de saisie 
						{					// avec une configuration lié au profil
							modal: true,
							_title: 'Formulaire Saisie Modifier',
							labels:
								[
					
								]
						}).show();
				
					if ( profil == 1 ) // Cache le bouton enregistrer 
						{
							App.get('button#btnenregistrer').setVisible(false);
						};
					if ( profil == 3 ) // Cache les boutons enregistrer et valider
						{
							App.get('button#btnenregistrer').setVisible(false);
							App.get('button#btnvalider').setVisible(true);
						}
					dat=record.data;
					UPDATE_ID=dat.ID_demande;
					App.get('combo#cbo1').setValue(dat.departement);
					App.get('combo#cbo2').setValue(dat.LibSub);
					App.get('combo#cbo3').setValue(dat.NomPre);
					App.get('combo#cbo4').setValue(dat.libelle_nature);
					App.get('combo#cbo5').setValue(dat.libelle_sous_nature);
					App.get('combo#cbo6').setValue(dat.domaine_metier);
					App.get('combo#cbo7').setValue(dat.evolution);
					
					App.get('textfield#txtfmotivation').setValue(dat.motivation_demande);
					App.get('textarea#txtalibelledemande').setValue(dat.libelle_commande);
					App.get('textarea#txtacommentaire').setValue(dat.commentaire_demande);
					App.get('numberfield#numberfieldquantite').setValue(dat.quantite);
					App.get('radiogroup#rdgpriorite').setValue(dat.phasage);
					var valeurprogress = (dat.avancement / 8); // la progressbar se remplit selon son etape 1-->8
					App.get('progressbar#progbAvancement').updateProgress(valeurprogress);
					App.get('radiogroup#rdgpriorite').setValue(dat.phasage); // Valider devient update

					App.get('label#labelannee').setText('Année: '+dat.annee_budget); // dans le VForm
					App.get('combo#cboAnnee_budgetaire').setValue(dat.annee_budget); // dans le VMain combo
					App.get('textfield#textfieldbudgetannuel').setValue(dat.budget_annuel);
					App.get('textfield#textfieldbudgetactuel').setValue(dat.budget_actuel);
					// la couleur de la progressbar prend une couleur selon son phasage P0->P3
					if (dat.phasage==0) App.get('progressbar#progbAvancement').getEl().dom.style.background = 'red';
					if (dat.phasage==1) App.get('progressbar#progbAvancement').getEl().dom.style.background = 'orange';
					if (dat.phasage==2) App.get('progressbar#progbAvancement').getEl().dom.style.background = 'green';
					if (dat.phasage==3) App.get('progressbar#progbAvancement').getEl().dom.style.background = 'purple';										
					if (dat.phasage==0) App.get('radio#RP0').setValue(true);
					if (dat.phasage==1) App.get('radio#RP1').setValue(true);
					if (dat.phasage==2) App.get('radio#RP2').setValue(true);
					if (dat.phasage==3) App.get('radio#RP3').setValue(true);					
					App.get('checkbox#chbspecial').setValue(dat.special);
					store: App.store.create('getAffichegrid01', // Creation du store
						{
							autoLoad: true,
						})					
				};
		}
//------------------------------------------------------------------------------------------------------			

	});
