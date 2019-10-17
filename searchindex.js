Search.setIndex({docnames:["api/mlprimitives","api/mlprimitives.adapters","api/mlprimitives.adapters.community","api/mlprimitives.adapters.cv2","api/mlprimitives.adapters.featuretools","api/mlprimitives.adapters.keras","api/mlprimitives.adapters.lightfm","api/mlprimitives.adapters.networkx","api/mlprimitives.adapters.pandas","api/mlprimitives.adapters.skimage","api/mlprimitives.adapters.statsmodels","api/mlprimitives.candidates","api/mlprimitives.candidates.audio_featurization","api/mlprimitives.candidates.audio_padding","api/mlprimitives.candidates.dsp","api/mlprimitives.candidates.timeseries","api/mlprimitives.candidates.timeseries.cyclegan","api/mlprimitives.cli","api/mlprimitives.custom","api/mlprimitives.custom.counters","api/mlprimitives.custom.feature_extraction","api/mlprimitives.custom.feature_selection","api/mlprimitives.custom.preprocessing","api/mlprimitives.custom.text","api/mlprimitives.custom.timeseries_anomalies","api/mlprimitives.custom.timeseries_preprocessing","api/mlprimitives.custom.trivial","api/mlprimitives.datasets","api/mlprimitives.evaluation","api/mlprimitives.utils","authors","community/adapters","community/annotations","community/contributing","community/custom","community/welcome","getting_started/concepts","history","index","readme"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api/mlprimitives.rst","api/mlprimitives.adapters.rst","api/mlprimitives.adapters.community.rst","api/mlprimitives.adapters.cv2.rst","api/mlprimitives.adapters.featuretools.rst","api/mlprimitives.adapters.keras.rst","api/mlprimitives.adapters.lightfm.rst","api/mlprimitives.adapters.networkx.rst","api/mlprimitives.adapters.pandas.rst","api/mlprimitives.adapters.skimage.rst","api/mlprimitives.adapters.statsmodels.rst","api/mlprimitives.candidates.rst","api/mlprimitives.candidates.audio_featurization.rst","api/mlprimitives.candidates.audio_padding.rst","api/mlprimitives.candidates.dsp.rst","api/mlprimitives.candidates.timeseries.rst","api/mlprimitives.candidates.timeseries.cyclegan.rst","api/mlprimitives.cli.rst","api/mlprimitives.custom.rst","api/mlprimitives.custom.counters.rst","api/mlprimitives.custom.feature_extraction.rst","api/mlprimitives.custom.feature_selection.rst","api/mlprimitives.custom.preprocessing.rst","api/mlprimitives.custom.text.rst","api/mlprimitives.custom.timeseries_anomalies.rst","api/mlprimitives.custom.timeseries_preprocessing.rst","api/mlprimitives.custom.trivial.rst","api/mlprimitives.datasets.rst","api/mlprimitives.evaluation.rst","api/mlprimitives.utils.rst","authors.rst","community/adapters.rst","community/annotations.rst","community/contributing.rst","community/custom.rst","community/welcome.rst","getting_started/concepts.rst","history.rst","index.rst","readme.rst"],objects:{"":{mlprimitives:[0,0,0,"-"]},"mlprimitives.adapters":{community:[2,0,0,"-"],cv2:[3,0,0,"-"],featuretools:[4,0,0,"-"],keras:[5,0,0,"-"],lightfm:[6,0,0,"-"],networkx:[7,0,0,"-"],pandas:[8,0,0,"-"],skimage:[9,0,0,"-"],statsmodels:[10,0,0,"-"]},"mlprimitives.adapters.community":{CommunityBestPartition:[2,1,1,""]},"mlprimitives.adapters.community.CommunityBestPartition":{produce:[2,2,1,""]},"mlprimitives.adapters.cv2":{GaussianBlur:[3,3,1,""]},"mlprimitives.adapters.featuretools":{DFS:[4,1,1,""],add_relationship:[4,3,1,""],entity_from_dataframe:[4,3,1,""]},"mlprimitives.adapters.featuretools.DFS":{calculate_feature_matrix:[4,2,1,""],dfs:[4,2,1,""],features:[4,4,1,""]},"mlprimitives.adapters.keras":{Sequential:[5,1,1,""],build_layer:[5,3,1,""]},"mlprimitives.adapters.keras.Sequential":{fit:[5,2,1,""],predict:[5,2,1,""]},"mlprimitives.adapters.lightfm":{LightFM:[6,1,1,""]},"mlprimitives.adapters.lightfm.LightFM":{fit:[6,2,1,""],get_columns:[6,2,1,""],predict:[6,2,1,""]},"mlprimitives.adapters.networkx":{graph_feature_extraction:[7,3,1,""],graph_pairs_feature_extraction:[7,3,1,""]},"mlprimitives.adapters.pandas":{resample:[8,3,1,""],unstack:[8,3,1,""]},"mlprimitives.adapters.skimage":{hog:[9,3,1,""]},"mlprimitives.adapters.statsmodels":{ARIMA:[10,1,1,""]},"mlprimitives.adapters.statsmodels.ARIMA":{predict:[10,2,1,""]},"mlprimitives.candidates":{audio_featurization:[12,0,0,"-"],audio_padding:[13,0,0,"-"],dsp:[14,0,0,"-"],timeseries:[15,0,0,"-"]},"mlprimitives.candidates.audio_featurization":{FFT:[12,3,1,""],energy:[12,3,1,""],energy_entropy:[12,3,1,""],featurize_audio:[12,3,1,""],featurize_segments:[12,3,1,""],rand_attr1:[12,3,1,""],spectral_centroid_and_spread:[12,3,1,""],spectral_entropy:[12,3,1,""],spectral_flux:[12,3,1,""],spectral_rolloff:[12,3,1,""],zcr:[12,3,1,""]},"mlprimitives.candidates.audio_padding":{AudioPadder:[13,1,1,""]},"mlprimitives.candidates.audio_padding.AudioPadder":{fit:[13,2,1,""],produce:[13,2,1,""]},"mlprimitives.candidates.dsp":{SpectralMask:[14,1,1,""],next_power_of_2:[14,3,1,""]},"mlprimitives.candidates.dsp.SpectralMask":{fit:[14,2,1,""],fit_freq_min_max:[14,2,1,""],fit_freq_std_dev:[14,2,1,""],produce:[14,2,1,""],window_design:[14,2,1,""]},"mlprimitives.candidates.timeseries":{cyclegan:[16,0,0,"-"]},"mlprimitives.candidates.timeseries.cyclegan":{CycleGAN:[16,1,1,""],RandomWeightedAverage:[16,1,1,""],score_anomalies:[16,3,1,""]},"mlprimitives.candidates.timeseries.cyclegan.CycleGAN":{fit:[16,2,1,""],predict:[16,2,1,""]},"mlprimitives.cli":{ArgumentParser:[17,1,1,""],main:[17,3,1,""]},"mlprimitives.cli.ArgumentParser":{error:[17,2,1,""]},"mlprimitives.custom":{counters:[19,0,0,"-"],feature_extraction:[20,0,0,"-"],feature_selection:[21,0,0,"-"],preprocessing:[22,0,0,"-"],text:[23,0,0,"-"],timeseries_anomalies:[24,0,0,"-"],timeseries_preprocessing:[25,0,0,"-"],trivial:[26,0,0,"-"]},"mlprimitives.custom.counters":{Counter:[19,1,1,""],UniqueCounter:[19,1,1,""],VocabularyCounter:[19,1,1,""],count_features:[19,3,1,""]},"mlprimitives.custom.counters.Counter":{count:[19,2,1,""],get_counts:[19,2,1,""]},"mlprimitives.custom.feature_extraction":{CategoricalEncoder:[20,1,1,""],DatetimeFeaturizer:[20,1,1,""],FeatureExtractor:[20,1,1,""],OneHotLabelEncoder:[20,1,1,""],StringVectorizer:[20,1,1,""]},"mlprimitives.custom.feature_extraction.CategoricalEncoder":{fit:[20,2,1,""]},"mlprimitives.custom.feature_extraction.FeatureExtractor":{fit:[20,2,1,""],fit_transform:[20,2,1,""],transform:[20,2,1,""]},"mlprimitives.custom.feature_extraction.OneHotLabelEncoder":{fit:[20,2,1,""],fit_transform:[20,2,1,""],transform:[20,2,1,""]},"mlprimitives.custom.feature_extraction.StringVectorizer":{fit:[20,2,1,""]},"mlprimitives.custom.feature_selection":{EstimatorFeatureSelector:[21,1,1,""],ExtraTreesClassifierFeatureSelector:[21,1,1,""],ExtraTreesRegressorFeatureSelector:[21,1,1,""],LassoFeatureSelector:[21,1,1,""]},"mlprimitives.custom.feature_selection.EstimatorFeatureSelector":{ESTIMATOR:[21,4,1,""],fit:[21,2,1,""],fit_transform:[21,2,1,""],selector:[21,4,1,""],transform:[21,2,1,""]},"mlprimitives.custom.feature_selection.ExtraTreesClassifierFeatureSelector":{ESTIMATOR:[21,4,1,""]},"mlprimitives.custom.feature_selection.ExtraTreesRegressorFeatureSelector":{ESTIMATOR:[21,4,1,""]},"mlprimitives.custom.feature_selection.LassoFeatureSelector":{ESTIMATOR:[21,4,1,""]},"mlprimitives.custom.preprocessing":{ClassDecoder:[22,1,1,""],ClassEncoder:[22,1,1,""]},"mlprimitives.custom.preprocessing.ClassDecoder":{decode:[22,2,1,""],fit:[22,2,1,""]},"mlprimitives.custom.preprocessing.ClassEncoder":{encode:[22,2,1,""],fit:[22,2,1,""]},"mlprimitives.custom.text":{TextCleaner:[23,1,1,""]},"mlprimitives.custom.text.TextCleaner":{RE_ACCENTS:[23,4,1,""],RE_NON_ALNUM:[23,4,1,""],RE_NON_ALPHA:[23,4,1,""],RE_SYMBOLS:[23,4,1,""],STOPWORDS:[23,4,1,""],detect_language:[23,2,1,""],fit:[23,2,1,""],get_stopwords:[23,2,1,""],produce:[23,2,1,""]},"mlprimitives.custom.timeseries_anomalies":{count_above:[24,3,1,""],deltas:[24,3,1,""],find_anomalies:[24,3,1,""],regression_errors:[24,3,1,""],z_cost:[24,3,1,""]},"mlprimitives.custom.timeseries_preprocessing":{intervals_to_mask:[25,3,1,""],rolling_window_sequences:[25,3,1,""],time_segments_aggregate:[25,3,1,""],time_segments_average:[25,3,1,""]},"mlprimitives.custom.trivial":{TrivialPredictor:[26,1,1,""]},"mlprimitives.custom.trivial.TrivialPredictor":{fit:[26,2,1,""],get_length:[26,2,1,""],predict:[26,2,1,""]},"mlprimitives.datasets":{Dataset:[27,1,1,""],load_amazon:[27,3,1,""],load_boston:[27,3,1,""],load_boston_multitask:[27,3,1,""],load_census:[27,3,1,""],load_dataset:[27,3,1,""],load_dic28:[27,3,1,""],load_handgeometry:[27,3,1,""],load_iris:[27,3,1,""],load_jester:[27,3,1,""],load_newsgroups:[27,3,1,""],load_nomination:[27,3,1,""],load_personae:[27,3,1,""],load_reviews:[27,3,1,""],load_umls:[27,3,1,""],load_usps:[27,3,1,""],load_wikiqa:[27,3,1,""]},"mlprimitives.datasets.Dataset":{data:[27,4,1,""],describe:[27,2,1,""],description:[27,4,1,""],get_splits:[27,2,1,""],name:[27,4,1,""],score:[27,2,1,""],target:[27,4,1,""]},"mlprimitives.evaluation":{get_context:[28,3,1,""],get_scorer:[28,3,1,""],get_value:[28,3,1,""],score_pipeline:[28,3,1,""]},"mlprimitives.utils":{image_transform:[29,3,1,""],import_object:[29,3,1,""],np_aggregate:[29,3,1,""]},mlprimitives:{adapters:[1,0,0,"-"],candidates:[11,0,0,"-"],cli:[17,0,0,"-"],custom:[18,0,0,"-"],datasets:[27,0,0,"-"],evaluation:[28,0,0,"-"],load_primitive:[0,3,1,""],utils:[29,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute"},terms:{"224x224":27,"50k":27,"\u00e0\u00e2\u00e1\u00e4\u00e5\u00e3":23,"\u00e8\u00ea\u00e9\u00eb":23,"\u00ec\u00ee\u00ed\u00ef":23,"\u00f2\u00f4\u00f3\u00f6":23,"\u00f9\u00fb\u00fa\u00fc":23,"abstract":[27,36],"boolean":25,"break":[31,34],"case":[21,24,31,32,33,34,35,36,38,39],"class":[2,4,5,6,10,13,14,16,17,19,20,21,22,23,26,27,31,32,34,37],"default":[6,20,26,37,38,39],"final":[38,39],"float":[24,25,27,36,38,39],"function":[7,8,24,25,27,28,29,31,32,33,34,35,37,38,39],"import":[8,21,29,38,39],"int":[6,8,16,20,24,25,27,36,38,39],"long":[31,32,33,34],"new":[24,27,33,34,36],"null":20,"public":27,"return":[6,8,10,14,16,17,24,25,27,29,36,38,39],"short":[27,38,39],"static":23,"super":32,"true":[4,5,8,17,19,20,21,23,24,25,27,29],"try":[20,31,38,39],"while":[31,32,33,34,36,38,39],And:[31,32,34],DFS:[4,31],For:[6,31,32,33,34,35,36,38,39],Its:6,Not:[6,36,38,39],That:36,The:[8,24,25,27,31,32,33,34,36,38,39],There:[27,32,35,38,39],These:[32,36,38,39],Use:32,Will:6,_merg:16,a_modul:33,a_nam:20,aag:27,abl:[38,39],about:[27,31,32,33,34,35,36,38,39],abov:[24,31,34,38,39],abs:12,absolut:24,accent:23,accept:[36,37],achiev:32,activ:[38,39],actual:[21,27,32],adapt:[0,32,38],add:[19,31,32,33,34,35,36,37],add_help:17,add_relationship:[4,37],added:[24,31,32,34,35],adding:[27,31,32,33,34,35],addit:[20,27,36,37,38,39],address:[31,32,34],adm:[38,39],adult:27,advanc:36,afnlwgt:27,after:[8,24,31,32,33,34,36,38,39],afterward:[8,33,38,39],age:[38,39],agg_primit:4,aggreg:[8,25,29],agi:27,agin:[38,39],alexandergeig:37,algorithm:36,alia:21,all:[6,20,24,27,31,32,33,34,35,36,37,38,39],allow:[20,24,27,32,35],allow_abbrev:17,along:[24,36],alreadi:[31,32,36],already_sort:4,also:[27,33,34,35,36,38,39],alter:[32,36],altern:[38,39],although:[38,39],alwai:[32,35,36],amazon:27,among:27,analyz:[20,24,38,39],ani:[20,27,31,32,33,34,35,36],annot:[27,31,34,35,36,37,38,39],anomal:24,anomali:[14,16,24,37],anomaly_pad:24,anoth:[24,31,32],answer:27,anyth:33,api:[33,36,38,39],app:[38,39],appli:[3,16,20,24,27,29,31,32,33,34,36,38,39],applic:37,approach:[32,33],approv:[31,32,33,34],archiv:27,arg:[6,19,21,27,29],argmax:36,argpars:17,argument:[0,20,27,37],argument_default:17,argumentpars:17,arima:[10,37],arima_model:10,around:[5,24,36,38,39],arrai:[6,10,16,21,24,25,27,29,36,37],articl:35,arxiv:24,ask:33,ass:[38,39],assign:[31,32,33,34],associ:[27,33,36],assum:[27,33],astyp:20,attend:35,attr1:27,attr2:27,attribut:[27,38,39],audio_featur:[0,11],audio_pad:[0,11],audiopadd:13,author:[27,37],auto:20,autodetect:20,autom:36,automat:20,avail:[27,31,32,33,34],averag:25,avoid:[38,39],axi:36,bachelor:[38,39],back:29,bad:24,barri:27,base:[2,4,5,6,10,13,14,16,17,19,20,21,22,23,26,27,33,37,38,39],basic:[32,33,38],batch_siz:[5,16],becaus:[31,32],becker:27,been:[8,31,32,33,34,36,38,39],befor:[8,20,24,27,31,32,33,34,36,38,39],behavior:[32,33,35,36,38,39],behaviour:36,being:[33,36,38,39],below:[21,24,35,37],berkelei:27,best:[32,33,38,39],best_partit:2,beta:14,better:24,between:[24,27,36,38,39],bigger:27,bin:[38,39],binari:[27,37],block:36,block_norm:9,blog:35,blur:3,bool:[6,8,20,24,25,27,36],boolt:8,boston:27,both:[3,6,21,36,38,39],bought:27,bound:37,branch:[31,32,33,34,38,39],broader:35,brought:36,brows:[38,39],bryan:30,bryanfarri:30,bugfix:33,build:[36,38,39],build_lay:5,built:[35,36],button:[38,39],bypass:21,calcul:[16,24,36],calculate_feature_matrix:4,california:27,call:[8,31,33,36,38,39],callabl:[8,27],callback:[5,37],can:[8,20,24,25,27,31,32,33,34,35,36,38,39],candid:[0,34,37],cannot:36,capit:[38,39],carefulli:[33,36],carl:30,categor:[20,38,39],categori:[20,27,37],categoricalencod:[20,37,38,39],cells_per_block_i:9,cells_per_block_x:9,censu:27,center:36,centimet:27,centroid:12,certain:[25,32],challeng:27,chang:[24,27,31,32,33,34,35,37],charact:27,characterist:36,check:[33,38,39],checkout:[33,38,39],child:4,child_column:4,choos:[38,39],chosen:24,civ:[38,39],classdecod:[22,37],classencod:[22,37],classif:[5,27,37],classifi:[32,36,37],classmethod:23,clean:[27,37],cleaner:[36,38,39],cleanup:37,clear:34,cleric:[38,39],clf:21,cli:0,click:[38,39],clone:[38,39],close:34,code:[31,32,34,36,38,39],coeff:12,col:6,collabor:27,collect:[27,28,38,39],column:[8,20,23,25,27,37,38,39],com:[27,30,35,38,39],combin:[16,20,24,35,38,39],come:[27,32],command:[17,31,32,33,34,37,38,39],comment:[31,32,33,34],commit:33,commun:[0,1,27,36,38],communitybestpartit:2,compait:37,compar:24,comparison:27,compat:[32,38,39],compendium:35,compil:[23,36],complet:32,complex:36,compliant:31,compon:[14,36],compos:27,compromis:36,comput:[6,12,16,24,25,27],concept:[33,38],condit:27,confer:27,conflict_handl:17,connect:27,consecut:24,consequ:33,consid:[20,32,34,35],consist:[14,25,27,31,32,34,36],consol:[38,39],construct:36,contain:[6,10,16,24,25,27,31,38,39],context_spec:28,continu:[24,31,32,34],contribut:[36,37,38,39],contributor:[31,32,34,35,37],control:37,convent:[31,34],convers:8,convert:[6,24],convnet:37,coo_matrix:6,cool:[31,32,38,39],cool_ml:31,coolml:31,coolprimit:[31,32],coordinate_desc:21,copi:[4,20,32],core:6,corner:[38,39],correspond:[24,25,31,32,34,36,38,39],cost:24,could:[34,35],count:[19,24,37],count_abov:24,count_featur:19,counter:[0,18,36],countri:[38,39],countvector:20,coupl:[38,39],cover:[31,32,33,34,35],coverag:[31,33],coykendal:30,crash:37,crawl:27,creat:[25,33,35,36],critic:16,critic_x_input_shap:16,critic_z_input_shap:16,cross:[12,27],csail:30,csala:[30,37],csr_matrix:6,curat:37,current:[12,31],custom:[0,27,35,37,38,39],cv2:[0,1],cycl:[38,39],cyclegan:[0,11,15],danielcalvocerezo:37,data:[3,12,14,20,21,25,27,32,35,36,37],databas:[27,33],datafram:[4,8,20,21,25,27,37,38,39],datagram:8,dataset:[0,21,28,31,32,34,37],datetim:20,datetimefeatur:20,decod:22,decomposit:37,deem:35,deeper:[33,36],defin:[6,14,21,24,27],delta:24,delta_mean:24,delta_std:24,demo:[33,37],denot:[24,25],densiti:14,depend:[33,36,38,39],deprec:8,describ:[25,27],descript:[17,27,31,32,33,34,35,38,39],design:[14,35],desir:34,detail:[6,27,31,32,33,34,35],detect:[14,20,24,27,37,38,39],detect_languag:23,determin:27,develop:33,deviat:[3,14,24,34,36],dfs:[4,31,37],dic28:27,dictionari:[27,38,39],diez:30,differ:[27,32,34,35,36],digit:27,dimension:[10,16,25,36],direct:3,directli:[27,32,38,39],directori:31,discrep:27,discuss:[31,32,33,34],distribut:27,dive:[33,36],divorc:[38,39],doc:[33,35],docstr:[33,35],document:[6,31,32,33,34,36,37,38,39],doe:[27,31,32,33,34,36],doing:[31,33,34],domain:[27,38,39],dominguez:30,don:[31,32,34],done:[27,32,33,35,38,39],dot:32,driven:35,drop:[20,25,37],drop_window:25,dropna:20,dsp:[0,11,37],dtype:[6,20,37],dure:36,dutch:27,each:[6,10,14,16,24,25,27,33,36,38,39],earli:37,easi:[27,36],easier:[31,32,33,34,35],edg:27,edu:[27,30],educ:[38,39],effici:[6,32],effort:35,efs:21,eigentast:27,either:[8,17,31,34,38,39],elasticnet:37,element:35,els:36,emp:[38,39],empti:20,enabl:[25,37],encod:[4,20,22,36,38,39],encoder_input_shap:16,end:[24,25],energi:12,energy_entropi:12,english:27,enough:[32,35],ensembl:[21,37],entir:24,entiti:4,entity_from_datafram:[4,37],entity_id:4,entityset:[4,37],entityset_id:4,entri:[6,27,31,32,34,37],entropi:12,entry_point:37,environ:33,epilog:17,epoch:[5,6,16,37],epsilon:24,equival:36,error:[16,17,24,32],estim:[21,36,37],estimator_class:21,estimatorfeatureselector:21,evalu:[0,27,37],even:35,ever:27,everi:[35,38,39],everyon:36,everyth:[31,32,34],ewma:24,exactli:[31,32,34],exampl:[21,31,32,34,35,37,38,39],exce:27,except:17,exclud:27,exec:[38,39],execut:[31,32,33,34,38,39],exist:[27,33,34,35,37,38],exit:17,expect:[24,27,36,38,39],expertis:[38,39],explain:[32,34,35],expos:32,express:[6,24,27],extend:34,extract:[20,27,36],extractor:20,extratreesclassifi:21,extratreesclassifierfeatureselector:21,extratreesregressor:21,extratreesregressorfeatureselector:21,extrovert:27,fact:31,fail:[33,35,37],fals:[4,5,20,21,24,25,27,29],famili:[38,39],far:33,farri:30,fast:[38,39],featur:[4,6,12,20,21,27,33,34,36,38,39],feature_extract:[0,18,34,37,38,39],feature_extractor:37,feature_importances_:21,feature_select:[0,18],featureextractor:[20,37],featuretool:[0,1,31,37],featurize_audio:12,featurize_seg:12,feedback:[31,32,33,34],feel:[34,35],fever:27,few:[38,39],fft:12,field:[38,39],file:[31,32,33,34,36],filter:27,find:[14,24,31,32,35,36],find_anomali:[24,37],fir:[38,39],first:[24,25,27,37,38,39],fit:[5,6,13,14,16,20,21,22,23,26,27,31,36,37],fit_freq_min_max:14,fit_freq_std_dev:14,fit_transform:[20,21],fix:[31,35],flake8:33,flip:24,float32:6,flux:12,fmin:24,fnlwgt:[38,39],focu:36,folder:[31,32,33,34,36,37],follow:[27,31,32,33,34,35,36,38,39],forest:21,forget:[31,32,34],fork:[31,32,33,34,38,39],form:[31,34],format:37,formatter_class:17,formula:24,forward:25,found:[24,36],frame:12,free:[35,38,39],frequenc:14,frequent:27,friendli:27,from:[6,20,21,25,27,29,31,32,33,34,35,36,37],fromfile_prefix_char:17,full:36,fulli:[8,29,31,32,34,38,39],gain:[14,38,39],gamma:[38,39],gan:37,gaussian:3,gaussianblur:3,gener:[20,27,38,39],generator_input_shap:16,geometri:27,get:[33,36,38,39],get_column:6,get_context:28,get_count:19,get_hyperparamet:[38,39],get_length:26,get_scor:28,get_split:27,get_stopword:23,get_tunable_hyperparamet:[38,39],get_valu:28,git:[33,38,39],github:[31,32,33,34,35,38,39],given:[3,8,12,16,20,24,25,27,28,37],gmail:30,gmx:30,goe:36,going:[33,38,39],gone:36,good:[24,34,36,38,39],goodn:27,googl:33,gov:[38,39],grad:[38,39],graph:[2,7,27,36,37],graph_feature_extract:7,graph_pairs_feature_extract:7,great:33,greater:35,ground:[16,24,27],group:[8,27],groupbi:8,grow:[38,39],guid:33,guidelin:[31,34,35,38],hack:33,hand:27,handl:37,handler:[38,39],handwritten:27,has:[8,16,27,31,32,33,34,36,38,39],have:[20,27,31,32,33,35,36,38,39],haven:36,hdi:[35,38,39],head:[33,35,38,39],hector:[30,37],hedb12:37,hedb_12:30,height:29,help:[35,36,38,39],helpformatt:17,here:35,hesit:35,high:20,higher:[6,24],highest:24,highli:[38,39],histori:[31,32,33,34],hog:9,hot:[38,39],hotmail:30,hour:[38,39],hous:27,how:[6,24,31,33,35,36,38,39],howev:36,hrswk:27,http:[24,27,35,38,39],huge:[32,38,39],huge_dataset:32,human:27,husband:[38,39],hyperparam:37,hyperparamet:[5,16,31,32,36,37],ics:27,ids:6,ignor:[20,31],ihssan:30,iloc:[38,39],imag:[27,29,36,37],image_transform:[29,37],implement:[6,24,31,32,33,34,35,36,38,39],import_object:29,improv:[32,36,38,39],imput:37,inc:[38,39],includ:[27,32,33,34,35,36,38,39],incom:27,incorpor:17,index:[4,8,24,25,36,37,38],indic:[8,24,25,27,31,32,33,34,35,36,39],individu:[6,36],infer:36,inform:[27,31,32,34,38,39],init_param:32,initail:27,initi:[10,16,27,34,36],input:[6,10,14,16,20,25,34,36,38,39],insid:[31,32,33,34,36],inspir:24,instal:[33,37],instanc:[6,20,27,36,38,39],instanti:36,instead:[20,32],int32:6,integ:[6,8,25,27],integr:[31,32,35,38],intent:32,intention:32,interact:6,interf:[38,39],interfac:[5,17],intern:27,interpret:[8,36],interv:[25,37],intervals_to_mask:25,invalid:25,invert:24,involv:[32,35],iri:[21,27],issu:[31,32,33,34,37,38,39],item:[6,27],item_featur:6,item_id:[6,27],iter:25,iterations_crit:16,itinawi:30,its:[6,14,24,27,29,31,32,33,34,35,38,39],jester:27,join:[8,35],joke:27,json:[31,32,33,34,36,37],just:[33,35,38,39],kaiser:14,kalyan:30,kanter:30,katherin:30,keep:[20,31,32,33,34,35,37],kei:20,kera:[0,1,16,31,36,37],kernel:3,kernel_s:3,keyword:[20,27,37],kfold:27,kind:[33,36],kmax12:30,kneighbor:37,know:[27,31,35],knowledg:[35,38,39],known:27,knuth:27,ksize_height:3,ksize_width:3,kwarg:[5,6,16,19,20,21,27,28,29],lab:[27,38,39],label:[20,27],labelencod:20,languag:[23,37],language_cod:23,lar:37,lasso:[21,37],lassofeatureselector:21,last:32,lastli:24,latent_dim:16,later:[24,33,36,38,39],latest:[38,39],layer:[5,16],layers_critic_x:16,layers_critic_z:16,layers_encod:16,layers_gener:16,learn:[20,21,27,32,33,35,36,37,38,39],learning_r:[16,38,39],least:[31,33,34],left:32,len:[38,39],length:[14,24,25,26],less:20,let:36,level:[0,8],librari:[31,33,34,35,36],licens:[38,39],life:35,lightfm:[0,1,36],like:[27,31,32,33,34,35,37,38,39],lincoln:27,line:[17,27],linear:27,linear_model:[21,37],linearregress:37,link:[27,31,32,33,34,35],lint:[33,37,38,39],list:[8,20,24,25,27,31,32,34,37],load:27,load_amazon:27,load_boston:27,load_boston_multitask:27,load_censu:[27,38,39],load_dataset:27,load_dic28:27,load_handgeometri:27,load_iri:[21,27],load_jest:27,load_newsgroup:27,load_nomin:27,load_persona:27,load_primit:[0,38,39],load_review:27,load_uml:27,load_usp:27,load_wikiqa:27,local:[35,38,39],locat:33,look:[31,33,38,39],loss:[5,6,38,39],lot:36,low:24,lower:[23,24],lower_threshold:24,lstm:37,lstmtextclassifi:36,lstmtimeseriesregressor:37,mac:37,machin:[33,35,36,38,39],made:[27,32,36],mai:[33,36],mail:[31,32,34],main:[17,35],maintain:[31,32,33,34,35,36],make:[20,24,27,31,32,33,34,35,36,37],make_index:4,male:[38,39],manageri:[38,39],mani:[31,32,33,34,35,38,39],manipul:36,manual:36,marit:[38,39],marri:[38,39],mask:[14,25,37],master:[38,39],match:27,math:[38,39],matric:6,matrix:[6,37],max:[14,20,30],max_depth:[4,38,39],max_label:20,max_unique_ratio:20,maxabsscal:37,maximum:[20,36],mayb:[31,32,33,34],mean:[8,24,25,31,32,34,36],meet:24,memori:6,merg:[16,36],messag:[6,17],metadata:36,method:[8,14,25,26,27,31,32,33,36,37,38,39],metric:5,microsoft:27,might:[31,32,34,35,36],mii:27,million:27,min:14,min_child_weight:[38,39],min_perc:24,min_word:20,minim:24,minimum:[20,38,39],minmaxscal:37,miss:[32,35],mit:[30,38,39],mlblock:[21,37,38,39],mlblocks_primit:37,mlp:37,mlprimit:[31,32,33,34,35,36,37],mock:33,modal:27,model:[5,6,10,16,21,33,36,37],modif:[31,32,34],modifi:[20,38,39],modul:[0,1,11,15,18,31,32,33,34,36,38],more:[27,32,35,36,37,38,39],most:[32,36],mostli:27,move:[24,25],much:35,multi:[8,23,27,37],multichannel:9,multiclass:27,multilay:37,multipl:[16,20,25,27],multitask:27,multitasklasso:37,must:[6,20],n_estim:[38,39],n_item:6,n_item_featur:6,n_job:[38,39],n_pair:6,n_split:[27,28],n_user:6,n_user_featur:6,name:[8,20,27,28,29,31,32,33,34,35,37,38,39],narrow:35,nativ:[36,38,39],ndarrai:[10,16,21,24,25],necessari:[31,32,33,34,35,36,38,39],need:[20,24,27,29,31,32,33,34,35,36,38,39],neg:[24,27,37],neighbor:37,network:27,networkx:[0,1,36],neutral:27,never:[38,39],newli:[38,39],newsgroup:27,next:[14,35],next_power_of_2:14,nfft:12,nga:30,node:27,node_column:7,nof:24,nomin:27,non:24,non_alpha:23,none:[0,2,4,5,7,8,17,20,21,23,24,25,26,28,29,33],norm_ord:21,normal:32,note:33,noth:36,now:[38,39],np_aggreg:29,num:[38,39],num_thread:6,number:[6,8,14,20,24,25,27,31,32,33,34,36,37,38,39],numofshortblock:12,numpi:[6,21,27,36,37],object:[2,4,5,8,10,13,14,16,19,20,21,22,23,26,27,29,38,39],object_nam:29,obtain:[27,38,39],obvious:35,occup:[38,39],occurr:20,off:12,offer:[31,32,33,34],offici:35,offset:8,old:[33,37],onc:[31,32,33,34,38,39],one:[8,24,25,27,31,32,33,34,35,36,38,39],onehotencod:20,onehotlabelencod:20,ones:[32,34,36],onli:[20,32,33,35,36],onlin:27,open:[27,31,32,33,34,35,38,39],oper:35,opinion:27,optim:[5,16],option:[6,8,16,20,24,25,35,37],order:[20,27,31,36,38,39],org:24,orient:[9,27],origin:[20,24,27,32,33],other:[27,31,32,33,34,35,36,38,39],otherwis:[25,27],our:[31,33,36,38,39],out:[24,25,32],output:[21,24,27,34,36,37,38,39],outsid:33,over:[6,16,25,27,28],overlap:24,overrid:17,own:[31,32,33,34,36,38,39],packag:33,page:[35,38,39],pair:[6,24,27],pajek:27,panda:[0,1,21,25,27,37,38,39],paper:[24,27,34],parallel:6,paramet:[3,6,8,10,14,16,20,24,25,27,29],parent:[4,17],parent_column:4,part:[33,35,38,39],parti:[31,33,34,36,38,39],particular:[32,34],pass:[8,20,21,27,33,36,38,39],path:33,pca:37,pdf:[24,34],per:[38,39],perceiv:27,percentag:24,perceptron:37,perfom:[38,39],perform:[8,21,28,32,36],person:27,persona:27,phase:36,photo:27,physic:6,pip:37,pipelin:[27,28,31,32,33,34,36,38,39],pipeline_metadata:28,pixels_per_cell_i:9,pixels_per_cell_x:9,place:[20,38,39],plamen:30,pleas:[31,32,33,34,35,38,39],point:[24,27,35,36],posit:[24,27],possibl:[6,31,32,33,34,35,36,38,39],post:[27,35],power:14,power_of_2:14,practition:35,precis:[32,35],prediciton:[38,39],predict:[5,6,10,16,24,26,27,32,36,37],predict_proba:32,prefit:21,prefix:33,prefix_char:17,prepar:36,preprocess:[0,18,36,37],preprocessor:21,prevent:32,previou:[31,34],previous:[31,32,33],price:27,primari:20,primit:[0,21,27,31,33],primtiv:37,print:[6,17,27],privat:[38,39],probabl:[31,32,34],problem:[32,37],procedur:24,proceed:[31,32,33,34],process:[36,38,39],produc:[2,13,14,23,31,36],product:27,prog:17,progress:6,project:[31,32,33,34,35,36,38,39],proper:[31,32,34,36],properli:[31,32,33,34],proport:[20,24],propos:34,prove:36,proven:36,provid:[14,27,31,32,33,34],prune:37,publicli:27,publish:[33,37],pull:[31,32,33,34,38,39],purchas:27,push:[31,32,33,34],put:[31,32,34],pvkdevelop:30,pypi:[37,38,39],pytest:33,python3:[38,39],python:[8,31,33,34,38,39],qualifi:[8,29,31,32,34],question:27,race:[38,39],rais:17,rand_attr1:12,random:33,random_st:[27,28],randomweightedaverag:16,rang:[24,32,35,36,38,39],rate:[12,27,37],ratio:20,ravel:37,re_acc:23,re_non_alnum:23,re_non_alpha:23,re_symbol:23,reach:27,read:[33,35],reader:27,readi:[27,33,35,38,39],real:[38,39],reason:[27,31,32,34,35,36],rebuild:29,recent:36,recommend:[6,27,38,39],reconstruct:16,record:27,refer:[38,39],referenc:32,refin:36,regress:27,regression_error:[24,37],regressor:37,regular:27,regularli:[38,39],relat:27,relationship:[4,38,39],releas:[37,38,39],reli:35,rememb:[35,38,39],remov:[27,37],remove_low_inform:4,renam:8,repeat:[24,38,39],replac:20,report:33,repositori:[32,38,39],repres:[8,27,35],reproduc:35,request:[31,32,33,34],requir:[29,31,33],requirements_dev:37,resampl:[8,37],research:27,reset:8,reset_index:8,reshap:[29,37],reshape_aft:29,reshape_befor:29,resid:[38,39],resolv:[31,32,34],respond:35,rest:[31,34],result:[8,24],review:[27,31,32,34,36],revis:27,rgb:27,ridg:37,right:[33,38,39],rjdiez:30,robustscal:37,rodrigo:30,roll:[12,25,37],rolling_window_sequ:[25,37],round:25,row:[6,38,39],rule:8,run:[6,31,32,33,34,36,37],safe:[31,34],sala:30,same:[6,24,25,31,32,33,34,36],sampl:[14,27],sample_frequ:12,sample_weight:6,satellit:14,scalar:19,scale:[27,36],scenario:[32,33],schema:31,scienc:[38,39],scientif:34,scientist:36,scikit:[20,21,32,36,37],scipi:24,scope:35,score:[6,16,24,27,36,38,39],score_anomali:16,score_pipelin:28,score_window:16,scratch:[32,34,36,38,39],search:[36,38],second:[8,27,36],secondary_time_index:4,section:[27,31,33,34,35,36,38,39],see:[6,35,38,39],segment:[12,25],select:[21,37],selectfrommodel:21,selector:21,self:[38,39],sent:27,sentenc:27,separ:[24,33,37],sequenc:[10,16,24,25,37],sequenti:[5,31,36,37],seri:[24,25,27,37,38,39],set:[27,33,36],set_hyperparamet:[38,39],setup:[35,37],sever:[35,36,37,38,39],sex:[38,39],shape:[6,16,21,27],shelf:35,shift:24,should:[6,17,24,25,31,32,33,34,35,38,39],show:21,shuffl:[5,27],sigma_i:3,sigma_x:3,signal:12,similar:[31,33],similarli:[38,39],simpl:[21,32,35,36],simpleimput:37,simpler:5,simplest:32,sinc:36,singl:[6,20,27,36,37,38,39],single_char:23,singlelayercnnimageclassifi:37,size:[3,16,24,25,37],skimag:[0,1],skipna:29,sklearn:[21,36,37],slow:36,smooth:[16,24],smooth_window:16,smoothing_window:24,societ:[38,39],softmax:37,softwar:[38,39],solut:21,some:[27,32,33,34,35,36],some_method:33,someth:35,sometim:[32,34,35],soon:35,sourc:[0,2,3,4,5,6,7,8,9,10,12,13,14,16,17,19,20,21,22,23,24,25,26,27,28,29,31,32,34,35],sourceuri:27,span:25,spanish:27,special:36,specif:[36,37,38,39],specifi:25,spectral:[12,14],spectral_centroid_and_spread:12,spectral_entropi:12,spectral_flux:12,spectral_rolloff:12,spectralmask:[14,37],split:27,spous:[38,39],squar:29,stabil:36,stabl:[38,39],standard:[3,8,14,24,36],standardscal:36,start:[24,25,33,35,36,38,39],state:[38,39],statsmodel:[0,1],statu:[38,39],std:24,std_dev:14,stddev:3,stderr:17,stdout:27,step:[10,24,25,31,32,33,34,35,36,38,39],step_siz:25,still:[31,32,34],stop:[24,37],stopword:23,store:24,str:[8,20,25,27,36],stratifi:27,strictli:[38,39],string:[8,17,25],stringvector:20,strong:36,structur:36,style:[31,33,34],subclass:[17,21],submit:33,suffix:32,suggest:34,suit:33,suport:37,support:[34,36,37],sure:[31,32,33,34,38,39],synthet:27,system:[27,33,35,38,39],sze:30,tabl:[27,37,39],tabular:37,tag:37,take:35,taken:20,target:[8,21,25,27,38,39],target_column:25,target_ent:4,target_index:37,target_s:25,task:27,teach:[38,39],telemetri:14,term:36,test:[27,31,32,34,36,37,38,39],test_:33,test_a_modul:33,test_error:33,test_some_methed_input_non:33,test_some_method_1:33,test_some_method_timeout:33,test_some_method_value_error:33,text:[0,18,20,27,36,37],text_preprocess:34,textclean:[23,37],than:[6,20,27,35,36],the_file_of_your_pipelin:33,thei:[27,33,34,35,36],them:[20,31,32,33,34,36,38,39],themselv:[24,35],thi:[8,17,20,21,24,27,31,32,33,34,35,36],thing:[27,32,33],think:[31,32],third:[31,33,34,36,38,39],thorough:34,thoroughli:36,those:[6,36,38,39],thoughtfulli:35,thread:6,three:27,threshold:[21,24],through:[33,36],time:[8,24,25,27,32,35,37,38,39],time_column:25,time_index:[4,8],time_segments_aggreg:25,time_segments_averag:[25,37],timeseres_error:37,timeseri:[0,11,37],timeseries_anomali:[0,18,34,37],timeseries_error:37,timeseries_preprocess:[0,18,37],timestamp:16,timseries_preprocess:37,tinawi:30,titl:[31,32,33,34],too:[38,39],tool:[28,33,34,36,38,39],top:0,topic:27,total:[19,24,27],tox:33,track:[31,32,33,34],train:[14,16,20,27,36,38,39],train_siz:[38,39],training_sign:14,trans_primit:4,transform:[20,21,27,35,36,38,39],transpar:36,tripl:27,trivial:[0,18],trivialpredictor:[26,37],troubleshoot:35,truth:[16,24,27],tsa:10,tunabl:36,tupl:27,tutori:[38,39],twitter:27,two:[24,27,38,39],txt:37,type:[6,8,10,14,16,21,24,25,27,32,33,34,38,39],typo:[35,37],uci:27,uml:27,unclear:35,under:[38,39],underli:20,underscor:8,understand:36,undirect:27,uniform:27,uniqu:20,uniquecount:[19,37],unit:[31,34,36,38,39],unittest:33,univers:27,unstack:[8,37],unus:32,unusu:24,upper:[37,38,39],usabl:36,usag:[17,21,36,38,39],use:[6,8,20,21,24,27,31,33,34,35,36,38,39],used:[8,16,24,25,27,29,33,35,36,38,39],useful:[31,32,33,34],user:[6,27],user_featur:6,user_id:[6,27],usernam:[38,39],uses:[31,32,34],using:[8,10,14,16,20,21,27,31,32,33,35,36],usp:27,usual:[31,32,34,36],util:[0,37],valentinov:30,valid:[27,33,37,38,39],validation_split:5,valu:[8,10,14,16,20,21,24,25,27,28,29,33,36],van:30,variabl:[38,39],variable_typ:4,varianc:36,vcoyk:30,vector:[14,27,38,39],veeramachaneni:30,venv:[38,39],verbos:[5,6,37],veri:[27,36],version:[33,35,37,38],vertex:27,vertic:27,vgg:37,view:33,viewdoc:33,virtualenv:[38,39],visual:9,vlaidat:37,vocabulari:36,vocabularycount:[19,37],volunt:35,wai:[27,32,35,36],wait:[31,32,33,34],wang19k:30,wang:30,want:[24,31,32,33,34,35,36,38,39],web:[33,35],websit:[27,33],week:[38,39],weight:6,well:[31,32,34,35,36,38,39],what:[31,32,33,34,35],when:[20,21,31,32,33,34,36,37],where:[24,35,36,38,39],whether:[6,8,20,24,25,27,29,31,35],which:[6,16,20,24,25,27,31,32,33,34,36,38,39],white:[38,39],who:[27,31,32,33,34],whole:35,whose:[27,36],whther:27,why:[31,32,34,36],width:[27,29],wiki:27,wikiqa:27,willing:35,window:[14,16,24,25,37],window_design:14,window_length:14,window_s:[24,25],window_step_s:24,within:[25,31],without:[36,37],wong:30,word:[20,27],work:[27,31,32,33,34,36,37,38,39],workclass:[38,39],worst:[38,39],would:[31,32,35,36],wrapper:[5,10],wrist:27,write:[31,32,33,34],written:27,wsnalic:30,www:27,x_new:21,x_test:[38,39],x_train:[38,39],xgb:37,xgbclassifi:[36,38,39],xgboost:[36,38,39],y_hat:[16,24],y_test:[38,39],y_train:[38,39],year:27,yet:[31,32,33,34,36],you:[17,31,32,33,34,35,36,38,39],your:[31,32,33,34,35,38,39],your_modul:34,yourprimit:34,yourself:[31,32,33,34],z_cost:24,z_rang:24,zcr:12,zero:12},titles:["mlprimitives package","mlprimitives.adapters package","mlprimitives.adapters.community module","mlprimitives.adapters.cv2 module","mlprimitives.adapters.featuretools module","mlprimitives.adapters.keras module","mlprimitives.adapters.lightfm module","mlprimitives.adapters.networkx module","mlprimitives.adapters.pandas module","mlprimitives.adapters.skimage module","mlprimitives.adapters.statsmodels module","mlprimitives.candidates package","mlprimitives.candidates.audio_featurization module","mlprimitives.candidates.audio_padding module","mlprimitives.candidates.dsp module","mlprimitives.candidates.timeseries package","mlprimitives.candidates.timeseries.cyclegan module","mlprimitives.cli module","mlprimitives.custom package","mlprimitives.custom.counters module","mlprimitives.custom.feature_extraction module","mlprimitives.custom.feature_selection module","mlprimitives.custom.preprocessing module","mlprimitives.custom.text module","mlprimitives.custom.timeseries_anomalies module","mlprimitives.custom.timeseries_preprocessing module","mlprimitives.custom.trivial module","mlprimitives.datasets module","mlprimitives.evaluation module","mlprimitives.utils module","Credits","Contributing Adapters","Contributing Annotations","Contributing Guidelines","Contributing Custom Primitives","Welcome to the Community","Basic Concepts","History","MLPrimitives","MLPrimitives"],titleterms:{"class":36,"function":36,"new":[31,32,35,37,38,39],adapt:[1,2,3,4,5,6,7,8,9,10,31,36],annot:32,anoth:[38,39],ask:35,audio_featur:12,audio_pad:13,basic:36,bug:[35,37],candid:[11,12,13,14,15,16,36],cli:17,code:[33,35],commun:[2,35],concept:36,contribut:[31,32,33,34,35],contributor:30,counter:19,creat:[31,32,34,38,39],credit:30,custom:[18,19,20,21,22,23,24,25,26,34,36],cv2:3,cyclegan:16,data:[38,39],dataset:[27,38,39],develop:[30,38,39],did:[38,39],directli:36,document:35,dsp:14,evalu:[28,38,39],evalut:[38,39],exampl:36,exist:[31,32],featur:[35,37],feature_extract:20,feature_select:21,featuretool:4,fit:[38,39],fix:37,from:[38,39],gener:[33,37],guidelin:33,histori:37,hyperparamet:[38,39],improv:37,indic:38,instal:[38,39],integr:36,issu:35,kera:5,lead:30,librari:[38,39],lightfm:6,load:[38,39],make:[38,39],mlprimit:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,38,39],modifi:[31,32,34],modul:[2,3,4,5,6,7,8,9,10,12,13,14,16,17,19,20,21,22,23,24,25,26,27,28,29],networkx:7,next:[38,39],overview:[38,39],packag:[0,1,11,15,18],panda:8,perform:[38,39],pip:[38,39],pipelin:37,predict:[38,39],preprocess:22,primit:[32,34,35,36,37,38,39],produc:[38,39],python:36,quickstart:[38,39],report:35,request:35,requir:[36,38,39],result:[38,39],run:[38,39],set:[38,39],skimag:9,some:[38,39],sourc:[38,39],split:[38,39],statsmodel:10,submodul:[0,1,11,15,18],subpackag:[0,11],tabl:38,test:33,text:23,thi:[38,39],timeseri:[15,16],timeseries_anomali:24,timeseries_preprocess:25,trivial:26,tune:[38,39],type:[35,36],unit:33,using:[38,39],util:29,valu:[38,39],version:32,welcom:35,what:[36,38,39],why:[38,39],write:35}})