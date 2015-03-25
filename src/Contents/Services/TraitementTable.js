TraitementTable = 
	{
		acces_lecture: function(o,cb)
			{
				var db=TraitementTable.using('db');
				db.model('bd01','select * from agents',cb);
			},
			
		acces_update: function(o,cb)
			{
				var db=TraitementTable.using('db');
				db.query('bd01','update agents set Nom= "'+o.Nom+'", Prenom="'+o.Prenom+'", Tel="'+o.Tel+'", Age="'+o.Age+'" where id="'+o.ID+'"',cb);
			},
			
		acces_insert: function(o,cb)
			{
				var db=TraitementTable.using('db');
				db.query('bd01','insert into agents(Nom,Prenom,Tel,Age) values ("'+o.Nom+'","'+o.Prenom+'","'+o.Tel+'","'+o.Age+'")',cb);
			},
			
		acces_delete: function(o,cb)
			{
				var db=TraitementTable.using('db');
				console.log('delete from agents where id="'+o.ID+'"');
				db.query('bd01','delete from agents where id="'+o.ID+'"',cb);
			},
		
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
				console.log(o);
				var db=TraitementTable.using('db');
				db.model('infocentre2015','select * from nature where ID_domaine_metier='+o.id,cb);
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
				db.query('infocentre2015','insert into base(service,departement,agent_demandeur,agent_beneficiaire,budget_annuel,budget_actuel,date_de_demande,nature,sous_nature,evolution,quantite,phasage,libelle_commande,motivation_demande,commentaire_demande,commentaire_S2i,etat_s2i,priorite_valide,etape_valide,priorite_niveau,avancement,special,annulation,cloture,annee_budget,domaine_metier,date_modif) values ("'+o.service+'","'+o.departement+'","'+o.agent_demandeur+'","'+o.agent_beneficiaire+'","'+o.budget_annuel+'","'+o.budget_actuel+'","'+o.date_de_demande+'","'+o.nature+'","'+o.sous_nature+'","'+o.evolution+'","'+o.quantite+'","'+o.phasage+'","'+o.libelle_commande+'","'+o.motivation_demande+'","'+o.commentaire_demande+'","'+o.commentaire_S2i+'","'+o.etat_s2i+'","'+o.priorite_valide+'","'+o.etape_valide+'","'+o.priorite_niveau+'","'+o.avancement+'","'+o.special+'","'+o.annulation+'","'+o.cloture+'","'+o.annee_budget+'","'+o.domaine_metier+'","'+o.date_modif+'")',cb);
			},
		acces_infocentre2015_base_update: function(o,cb)
			{
				var db=TraitementTable.using('db');
				db.query('infocentre2015','update base set phasage="'+o.phasage+'",priorite_valide="'+o.priorite_valide+'", etape_valide="'+o.etape_valide+'", avancement="'+o.avancement+'", annulation="'+o.annulation+'", special="'+o.special+'" where ID_demande="'+o.ID_demande+'" ',cb);	
			},
		acces_infocentre2015_base_modifier: function(o,cb)
			{
				var db=TraitementTable.using('db');
				db.query('infocentre2015','update base set nature="'+o.nature+'",sous_nature="'+o.sous_nature+'",evolution="'+o.evolution+'",motivation_demande="'+o.motivation_demande+'",commentaire_demande="'+o.commentaire_demande+'",commentaire_S2i="'+o.commentaire_S2i+'",domaine_metier="'+o.domaine_metier+'" where ID_demande="'+o.ID_demande+'" ',cb);
			},		
		acces_infocentre2015_base_lecture: function(o,cb)
			{
/* 							var db=TraitementTable.using('db');
				db.model('infocentre2015',db.sql('test_sql',{
					toto : "007"
				}),cb); */
				var db=TraitementTable.using('db');
				db.model('infocentre2015','select * from base',cb);
			},
		acces_infocentre2015_base_affiche_grid01: function(o,cb)
			{
				var db=TraitementTable.using('db');
				db.model('infocentre2015','select *, concat(Nom," ",Prenom) NomPre from base as b join domaine_metier as dm on b.domaine_metier = dm.ID_domaine_metier join nature as n on b.nature = n.ID_nature join sous_nature as sn on b.sous_nature = sn.ID_sous_nature join priorite as p on b.priorite_niveau = p.ID_priorite join evolution as ev on b.evolution = ev.ID_evolution join priorite as pr on b.phasage = pr.ID_priorite join bpclight.agents as ka on b.agent_beneficiaire = ka.Kage join bpclight.unites as ku on b.departement = ku.Kuni join bpclight.subdis as su on b.service = su.Ksub order by date_de_demande desc',cb);
				//console.log('select * from base as b left join domaine_metier as dm on b.domaine_metier = dm.ID_domaine_metier left join nature as n on b.nature = n.ID_nature left join sous_nature as sn on b.sous_nature = sn.ID_sous_nature left join priorite as p on b.priorite_niveau = p.ID_priorite');
			},
		acces_infocentre2015_base_affiche_grid02: function(o,cb)
			{
				var db=TraitementTable.using('db');
				db.model('infocentre2015','select *, concat(Nom," ",Prenom) NomPre from base as b join domaine_metier as dm on b.domaine_metier = dm.ID_domaine_metier join nature as n on b.nature = n.ID_nature join sous_nature as sn on b.sous_nature = sn.ID_sous_nature join priorite as p on b.priorite_niveau = p.ID_priorite join evolution as ev on b.evolution = ev.ID_evolution join priorite as pr on b.phasage = pr.ID_priorite join bpclight.agents as ka on b.agent_beneficiaire = ka.Kage join bpclight.unites as ku on b.departement = ku.Kuni join bpclight.subdis as su on b.service = su.Ksub order by date_de_demande desc where ID_annee_budgetaire='+o.id,cb);
				//console.log('select * from base as b left join domaine_metier as dm on b.domaine_metier = dm.ID_domaine_metier left join nature as n on b.nature = n.ID_nature left join sous_nature as sn on b.sous_nature = sn.ID_sous_nature left join priorite as p on b.priorite_niveau = p.ID_priorite');
			},						
		acces_infocentre2015_annee_budgetaire_lecture: function(o,cb)
			{
				var db=TraitementTable.using('db');
				db.model('infocentre2015','select * from annee_budgetaire' ,cb) ;// where ID_annee_budgetaire='+o.id,cb);							
			}
	}
module.exports = TraitementTable;