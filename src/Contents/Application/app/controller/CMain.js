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
				switch ( profil )
					{
						case 1: 
							Ext.Msg.alert('Omneedia','Profil Administrateur');
							//App.get('VForm',{height:590});
							App.get('button#btnajouter').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('button#btnajouter').hide(true);
							App.get('button#btnmodifier').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('button#btnmodifier').hide(true);							
							break ;
						case 2: 
							Ext.Msg.alert('Omneedia','Profil Chef de Département');
							//App.get('VForm',{height:490});
							App.get('button#btnajouter').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('button#btnajouter').hide(true);
							App.get('button#btnmodifier').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('button#btnmodifier').hide(true);
							App.get('menu>menuitem#menuNouvelleDemande').hide(true);							
							break ;
						case 3:
							Ext.Msg.alert('Omneedia','Profil Chef de Service');
							//App.get('VForm',{height:490});
							App.get('button#btnajouter').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('button#btnajouter').hide(true);
							App.get('button#btnmodifier').el.setVisibilityMode(Ext.Element.DISPLAY);
							App.get('button#btnmodifier').hide(true);
							App.get('menu>menuitem#menuMiseajourDemande').hide(true);							
							break ;
						case 4: 
							Ext.Msg.alert('Omneedia','Profil Utilisateur');
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
/* 			if(!OP)	// Si OP est faux
			{
			
					App.get('combo#cbo1').setValue(dat.departement);
					App.get('combo#cbo2').setValue(dat.LibSub);
					App.get('combo#cbo3').setValue(dat.agent_beneficiaire);
					App.get('combo#cbo4').setValue(dat.libelle_nature);
					App.get('combo#cbo5').setValue(dat.libelle_sous_nature);
					App.get('combo#cbo6').setValue(dat.domaine_metier);
					App.get('combo#cbo7').setValue(dat.evolution);
					
					App.get('textfield#txtfmotivation').setValue(dat.motivation_demande);
					App.get('textarea#txtalibelledemande').setValue(dat.libelle_commande);
					App.get('textarea#txtacommentaire').setValue(dat.commentaire_demande);
					App.get('numberfield#numberfieldquantite').setValue(dat.quantité);
					App.get('radiogroup#rdgpriorite').setValue(dat.phasage);
					App.get('checkbox#chbspecial').setValue(dat.special);
					//App.get('label#annee').setValue(dat.annee_budget);
					
					App.get('label#annee').setValue(dat.annee_budget);
					//console.log('col_annee_budgetaire');
				
				UPDATE_ID=dat.ID_demande;
			}		
			else; */
		},	
	grid_onselect: function(p, record) //
		{
			//console.log(record);
			//dat=record.data;

			if ( profil != 4 )
				{
					App.view.create('VForm',
						{
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
					console.log(dat.ID_demande);
					console.log(record);
					App.get('combo#cbo1').setValue(dat.departement);
					App.get('combo#cbo2').setValue(dat.LibSub);
					//App.get('combo#cbo3').setValue(dat.agent_beneficiaire);
					App.get('combo#cbo3').setValue(dat.NomPre);
					App.get('combo#cbo4').setValue(dat.libelle_nature);
					App.get('combo#cbo5').setValue(dat.libelle_sous_nature);
					App.get('combo#cbo6').setValue(dat.domaine_metier);
					App.get('combo#cbo7').setValue(dat.evolution);
					
					App.get('textfield#txtfmotivation').setValue(dat.motivation_demande);
					App.get('textarea#txtalibelledemande').setValue(dat.libelle_commande);
					App.get('textarea#txtacommentaire').setValue(dat.commentaire_demande);
					App.get('numberfield#numberfieldquantite').setValue(dat.quantité);
					App.get('radiogroup#rdgpriorite').setValue(dat.phasage);
					var valeurprogress = (dat.avancement / 8);
					App.get('progressbar#progbAvancement').updateProgress(valeurprogress);
					App.get('radiogroup#rdgpriorite').setValue(dat.phasage); // Valider devient update
					
					//console.log(dat.annee_budget);
					//App.get('lable#labelannee').setText(dat.annee_budget);
					App.get('label#labelannee').setText('Année: '+dat.annee_budget); // dans le VForm
					App.get('label#annee').setText('Année: '+dat.annee_budget); // dans le VMain
					App.get('textfield#textfieldbudgetannuel').setValue(dat.budget_annuel);
					App.get('textfield#textfieldbudgetactuel').setValue(dat.budget_actuel);
					
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
