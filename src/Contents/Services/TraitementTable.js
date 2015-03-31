TraitementTable = {
	acces_bpclight_lecture_agents: function(o,cb)
		{
			var db=TraitementTable.using('db');
			db.model('bpclight','select Kage, concat(Nom," ",Prenom) NomPre from agents where kuni='+o.kuni+' and ksub='+o.ksub+' and Actif=1 order by Nom asc',cb);
		},
		
	acces_bpclight_lecture_departement: function(o,cb)
		{
			var db=TraitementTable.using('db');
			db.model('bpclight','select * from unites where Archive=0 order by LibUni asc',cb);
		}, 
		
	acces_bpclight_lecture_service: function(o,cb)
		{
			var db=TraitementTable.using('db');
			db.model('bpclight','select * from subdis where Archive=0 and kuni='+o.id+' order by LibSubC asc',cb);
		},

	acces_infocentre2015_lecture_domaine_metier: function(o,cb)
		{
			var db=TraitementTable.using('db');
			db.model('infocentre2015','select * from domaine_metier',cb);
			
		},
		
	acces_infocentre2015_lecture_nature: function(o,cb)
		{
			//console.log(o);
			var db=TraitementTable.using('db');
			db.model('infocentre2015','select * from nature where ID_domaine_metier='+o.id,cb);
			//db.model('infocentre2015','select * from nature',cb);
		},
	acces_infocentre2015_lecture_evolution: function(o,cb)
		{
			var db=TraitementTable.using('db');
			db.model('infocentre2015','select * from evolution',cb);
		},

	acces_infocentre2015_lecture_sous_nature: function(o,cb)
		{
			var db=TraitementTable.using('db');
			db.model('infocentre2015','select * from sous_nature where ID_nature='+o.id,cb);
		},
	acces_infocentre2015_base_insert: function(o,cb)
		{
			var db=TraitementTable.using('db');
			db.query('infocentre2015','insert into base(service,departement,agent_demandeur,agent_beneficiaire,budget_annuel,budget_actuel,date_de_demande,nature,sous_nature,evolution,quantité,phasage,libelle_commande,motivation_demande,commentaire_demande,commentaire_S2i,etat_s2i,priorite_valide,etape_valide,priorite_niveau,avancement,special,annulation,cloture,annee_budget,domaine_metier,date_modif) values ("'+o.service+'","'+o.departement+'","'+o.agent_demandeur+'","'+o.agent_beneficiaire+'","'+o.budget_annuel+'","'+o.budget_actuel+'","'+o.date_de_demande+'","'+o.nature+'","'+o.sous_nature+'","'+o.evolution+'","'+o.quantité+'","'+o.phasage+'","'+o.libelle_commande+'","'+o.motivation_demande+'","'+o.commentaire_demande+'","'+o.commentaire_S2i+'","'+o.etat_s2i+'","'+o.priorite_valide+'","'+o.etape_valide+'","'+o.priorite_niveau+'","'+o.avancement+'","'+o.special+'","'+o.annulation+'","'+o.cloture+'","'+o.annee_budget+'","'+o.domaine_metier+'","'+o.date_modif+'")',cb);

		},
	acces_infocentre2015_base_update: function(o,cb)
		{
			var db=TraitementTable.using('db');
			db.query('infocentre2015','update base set phasage="'+o.phasage+'",priorite_valide="'+o.priorite_valide+'", etape_valide="'+o.etape_valide+'", avancement="'+o.avancement+'", annulation="'+o.annulation+'", special="'+o.special+'" where ID_demande="'+o.ID_demande+'" ',cb);	
		},
	acces_infocentre2015_base_modifier: function(o,cb)
		{
			var db=TraitementTable.using('db');
			//console.log('update base set nature="'+o.nature+'",sous_nature="'+o.sous_nature+'",evolution="'+o.evolution+'",motivation_demande="'+o.motivation_demande+'",commentaire_demande="'+o.commentaire_demande+'",commentaire_S2i="'+o.commentaire_S2i+'" where ID_demande="'+o.ID_demande+'" ');
			db.query('infocentre2015','update base set nature="'+o.nature+'",sous_nature="'+o.sous_nature+'",evolution="'+o.evolution+'",motivation_demande="'+o.motivation_demande+'",commentaire_demande="'+o.commentaire_demande+'",commentaire_s2i="'+o.commentaire_s2i+'",date_modif="'+o.date_modif+'" where ID_demande="'+o.ID_demande+'" ',cb);
		},		
	acces_infocentre2015_base_lecture: function(o,cb)
		{
			var db=TraitementTable.using('db');
			db.model('infocentre2015','select * from base',cb);
		},
		
	acces_infocentre2015_base_affiche_grid01: function(o,cb)
		{
			var db=TraitementTable.using('db');
			db.model('infocentre2015','select *, concat(Nom," ",Prenom) NomPre from base as b join domaine_metier as dm on b.domaine_metier = dm.ID_domaine_metier join nature as n on b.nature = n.ID_nature join sous_nature as sn on b.sous_nature = sn.ID_sous_nature join priorite as p on b.priorite_niveau = p.ID_priorite join evolution as ev on b.evolution = ev.ID_evolution join priorite as pr on b.phasage = pr.ID_priorite join bpclight.agents as ka on b.agent_beneficiaire = ka.Kage join bpclight.unites as ku on b.departement = ku.Kuni join bpclight.subdis as su on b.service = su.Ksub order by date_de_demande desc',cb);
			//console.log('select * from base as b left join domaine_metier as dm on b.domaine_metier = dm.ID_domaine_metier left join nature as n on b.nature = n.ID_nature left join sous_nature as sn on b.sous_nature = sn.ID_sous_nature left join priorite as p on b.priorite_niveau = p.ID_priorite');
		},
		
/* 	acces_infocentre2015_base_affiche_grid01: function(o,cb)
		{
			function boucle(o,name,n) {
				var tmp={};
				for (var i=0;i<o.data.length;i++) {
					tmp[o.data[i][name]]=o.data[i][n];
				};
				return tmp;
			};
			
			//console.log('----******************---');
			var db=TraitementTable.using('db');
			db.model('infocentre2015', db.sql('base_affiche_grid01',{ID: o.ID}), function(err,result) {
				var AGENTS=[];
				var DEPARTEMENTS=[];
				var SERVICES=[];
				db.model('bpclight',"select kage, concat(Nom,' ',Prenom) NomPre from agents",function(err,agents) {
					db.model('bpclight',"select kuni,libunic from unites",function(err,departements) {
						db.model('bpclight',"select ksub,libsubc from subdis",function(err,services) {
							AGENTS=boucle(agents,'kage','NomPre');
							DEPARTEMENTS=boucle(departements,'kuni','libunic');
							SERVICES=boucle(services,'ksub','libsubc');
							for (var i=0;i<result.data.length;i++) {							
								result.data[i].NomPre=AGENTS[result.data[i].agent_beneficiaire];
								result.data[i].LibSubC=SERVICES[result.data[i].service];
								result.data[i].LibUnic=DEPARTEMENTS[result.data[i].departement];
								if (result.data[i].commentaire_s2i=="undefined") result.data[i].commentaire_s2i="";
							};
							result.metaData.fields[result.metaData.fields.length]={
								name: "LibUnic",
								type: "string",
								length: "255",
							};
							result.metaData.fields[result.metaData.fields.length]={
								name: "LibSubC",
								type: "string",
								length: "255",
							};
							result.metaData.fields[result.metaData.fields.length]={
								name: "NomPre",
								type: "string",
								length: "255",
							};
							cb(err,result);
						});
					});
				});
			});	
		}, */
		
    acces_infocentre2015_base_affiche_grid02: function(o,cb)
		{
			var db=TraitementTable.using('db');
			db.model('infocentre2015','select *, concat(Nom," ",Prenom) NomPre from base as b join domaine_metier as dm on b.domaine_metier = dm.ID_domaine_metier join nature as n on b.nature = n.ID_nature join sous_nature as sn on b.sous_nature = sn.ID_sous_nature join priorite as p on b.priorite_niveau = p.ID_priorite join evolution as ev on b.evolution = ev.ID_evolution join priorite as pr on b.phasage = pr.ID_priorite join bpclight.agents as ka on b.agent_beneficiaire = ka.Kage join bpclight.unites as ku on b.departement = ku.Kuni join bpclight.subdis as su on b.service = su.Ksub order by date_de_demande desc where ID_annee_budgetaire='+o.id,cb);
			//console.log('select * from base as b left join domaine_metier as dm on b.domaine_metier = dm.ID_domaine_metier left join nature as n on b.nature = n.ID_nature left join sous_nature as sn on b.sous_nature = sn.ID_sous_nature left join priorite as p on b.priorite_niveau = p.ID_priorite');
		},
		
/* 	acces_infocentre2015_base_affiche_grid02: function(o,cb)
		{
			var db=TraitementTable.using('db');
			//db.model('infocentre2015','select *, concat(Nom," ",Prenom) NomPre from base as b join domaine_metier as dm on b.domaine_metier = dm.ID_domaine_metier join nature as n on b.nature = n.ID_nature join sous_nature as sn on b.sous_nature = sn.ID_sous_nature join priorite as p on b.priorite_niveau = p.ID_priorite join evolution as ev on b.evolution = ev.ID_evolution join priorite as pr on b.phasage = pr.ID_priorite join bpclight.agents as ka on b.agent_beneficiaire = ka.Kage join bpclight.unites as ku on b.departement = ku.Kuni join bpclight.subdis as su on b.service = su.Ksub order by date_de_demande desc where ID_annee_budgetaire='+o.id,cb);
			//console.log('select * from base as b left join domaine_metier as dm on b.domaine_metier = dm.ID_domaine_metier left join nature as n on b.nature = n.ID_nature left join sous_nature as sn on b.sous_nature = sn.ID_sous_nature left join priorite as p on b.priorite_niveau = p.ID_priorite');
			function boucle(o,name,n) {
				var tmp={};
				for (var i=0;i<o.data.length;i++) {
					tmp[o.data[i][name]]=o.data[i][n];
				};
				return tmp;
			};
			
			console.log('----******************---');
			var db=TraitementTable.using('db');
			db.model('infocentre2015', db.sql('base_affiche_grid02',{ID: o.id}), function(err,result) {
				var AGENTS=[];
				var DEPARTEMENTS=[];
				var SERVICES=[];
				db.model('bpclight',"select kage, concat(Nom,' ',Prenom) NomPre from agents",function(err,agents) {
					db.model('bpclight',"select kuni,libunic from unites",function(err,departements) {
						db.model('bpclight',"select ksub,libsubc from subdis",function(err,services) {
							AGENTS=boucle(agents,'kage','NomPre');
							DEPARTEMENTS=boucle(departements,'kuni','libunic');
							SERVICES=boucle(services,'ksub','libsubc');
							for (var i=0;i<result.data.length;i++) {							
								result.data[i].NomPre=AGENTS[result.data[i].agent_beneficiaire];
								result.data[i].LibSubC=SERVICES[result.data[i].service];
								result.data[i].LibUnic=DEPARTEMENTS[result.data[i].departement];
								if (result.data[i].commentaire_s2i=="undefined") result.data[i].commentaire_s2i="";
							};
							result.metaData.fields[result.metaData.fields.length]={
								name: "LibUnic",
								type: "string",
								length: "255",
							};
							result.metaData.fields[result.metaData.fields.length]={
								name: "LibSubC",
								type: "string",
								length: "255",
							};
							result.metaData.fields[result.metaData.fields.length]={
								name: "NomPre",
								type: "string",
								length: "255",
							};
							cb(err,result);
						});
					});
				});
			});	
		}, */
		
	acces_infocentre2015_annee_budgetaire_lecture: function(o,cb)
		{
			var db=TraitementTable.using('db');
			db.model('infocentre2015','select * from annee_budgetaire' ,cb) ;// where ID_annee_budgetaire='+o.id,cb);							
		}
};

module.exports = TraitementTable;