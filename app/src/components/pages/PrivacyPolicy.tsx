import { Box, Button, Grid, List, ListItem, Typography } from "@mui/material";
import { FC, memo } from "react";
import { useStyles } from "../../hooks/useStyles";
import { Link as RouterLink } from "react-router-dom";

export const PrivacyPolicy: FC = memo(() => {
  const classes = useStyles();
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <Box sx={{ width: "100%", maxWidth: 800, backgroundColor: "#ffeded", overflow: "scroll" }} p={5}>
        <Typography mb={2} textAlign="center" sx={{ typography: { xs: "h5", sm: "h4" } }}>
          プライバシーポリシー
        </Typography>
        <Typography variant="body1" mb={3}>
          TypingPlus（以下、「当社」といいます。）は、本ウェブサイト上で提供するサービス（以下,
          「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
        </Typography>
        <Box p={2}>
          <Typography sx={{ typography: { xs: "h6", sm: "h5" } }}>
            <span className={classes.underLine}>第1条（個人情報）</span>
          </Typography>
          <Typography pt={2} pb={2}>
            「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
          </Typography>
          <Typography sx={{ typography: { xs: "h6", sm: "h5" } }}>
            <span className={classes.underLine}>第2条（個人情報の収集方法）</span>
          </Typography>
          <Typography pt={2} pb={2}>
            当社は、ユーザーが利用登録をする際にメールアドレスをお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を,当社の提携先（情報提供元、広告主、広告配信先などを含みます。以下、｢提携先｣といいます。）などから収集することがあります。
          </Typography>
          <Typography sx={{ typography: { xs: "h6", sm: "h5" } }}>
            <span className={classes.underLine}>第3条（個人情報を収集・利用する目的）</span>
          </Typography>
          <List component="ol" className={classes.customList}>
            <Typography>当社が個人情報を収集・利用する目的は、以下の通りです。</Typography>
            <ListItem>当社サービスの提供・運営のため</ListItem>
            <ListItem>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</ListItem>
            <ListItem>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</ListItem>
            <ListItem>当社、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</ListItem>
            <ListItem>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</ListItem>
            <ListItem>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</ListItem>
            <ListItem>上記の利用目的に付随する目的</ListItem>
          </List>
          <Typography sx={{ typography: { xs: "h6", sm: "h5" } }}>
            <span className={classes.underLine}>第4条（利用目的の変更）</span>
          </Typography>
          <List component="ol" className={classes.customList}>
            <ListItem>当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。</ListItem>
            <ListItem>犯罪行為に関連する行為</ListItem>
            <ListItem>サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為</ListItem>
            <ListItem>当社、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</ListItem>
            <ListItem>利用目的の変更を行った場合には、変更後の目的について、当社所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。</ListItem>
          </List>
          <Typography sx={{ typography: { xs: "h6", sm: "h5" } }}>
            <span className={classes.underLine}>第5条（個人情報の第三者提供）</span>
          </Typography>
          <List component="ol" className={classes.customList}>
            <ListItem>当社は、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。</ListItem>
            <ListItem>前項の定めにかかわらず、次に掲げる場合には、当該情報の提供先は第三者に該当しないものとします</ListItem>
            <Typography ml="45px">・当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</Typography>
            <Typography ml="45px" pb={1}>
              ・個人情報を特定の者との間で共同して利用する場合であって、その旨並びに共同して利用される個人情報の項目、共同して利用する者の範囲、利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について、あらかじめ本人に通知し、または本人が容易に知り得る状態に置いた場合
            </Typography>
          </List>
          <Typography sx={{ typography: { xs: "h6", sm: "h5" } }}>
            <span className={classes.underLine}>第6条（個人情報の開示）</span>
          </Typography>
          <List component="ol" className={classes.customList}>
            <ListItem>
              当社は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
            </ListItem>
            <Typography ml="45px">・本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</Typography>
            <Typography ml="45px">・当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</Typography>
            <Typography ml="45px">・その他法令に違反することとなる場合</Typography>
            <ListItem>前項の定めにかかわらず、履歴情報および特性情報などの個人情報以外の情報については、原則として開示いたしません。</ListItem>
          </List>
          <Typography sx={{ typography: { xs: "h6", sm: "h5" } }}>
            <span className={classes.underLine}>第7条（個人情報の訂正および削除）</span>
          </Typography>
          <List component="ol" className={classes.customList}>
            <ListItem>
              ユーザーは、当社の保有する自己の個人情報が誤った情報である場合には、当社が定める手続きにより、当社に対して個人情報の訂正、追加または削除（以下、「訂正等」といいます。）を請求することができます。
            </ListItem>
            <ListItem>当社は、ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の訂正等を行うものとします。</ListItem>
            <ListItem>当社は、前項の規定に基づき訂正等を行った場合、または訂正等を行わない旨の決定をしたときは遅滞なく、これをユーザーに通知します。</ListItem>
          </List>
          <Typography sx={{ typography: { xs: "h6", sm: "h5" } }}>
            <span className={classes.underLine}>第8条（個人情報の利用停止等）</span>
          </Typography>
          <List component="ol" className={classes.customList}>
            <ListItem>
              当社は、本人から、個人情報が、利用目的の範囲を超えて取り扱われているという理由、または不正の手段により取得されたものであるという理由により、その利用の停止または消去（以下、「利用停止等」といいます。）を求められた場合には、遅滞なく必要な調査を行います。
            </ListItem>
            <ListItem>前項の調査結果に基づき、その請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の利用停止等を行います。</ListItem>
            <ListItem>当社は、前項の規定に基づき利用停止等を行った場合、または利用停止等を行わない旨の決定をしたときは、遅滞なく、これをユーザーに通知します。</ListItem>
            <ListItem>
              前2項にかかわらず、利用停止等に多額の費用を有する場合その他利用停止等を行うことが困難な場合であって、ユーザーの権利利益を保護するために必要なこれに代わるべき措置をとれる場合は、この代替策を講じるものとします。
            </ListItem>
          </List>
          <Typography sx={{ typography: { xs: "h6", sm: "h5" } }} pt={1}>
            <span className={classes.underLine}>第9条（プライバシーポリシーの変更）</span>
          </Typography>
          <List component="ol" className={classes.customList}>
            <ListItem>本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。</ListItem>
            <ListItem>当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。</ListItem>
          </List>
          <Typography sx={{ typography: { xs: "h6", sm: "h5" } }} pt={1}>
            <span className={classes.underLine}>第9条（個人情報の取扱い）</span>
          </Typography>
          {/* <List component="ol" className={classes.customList}> */}
          <Typography pt={2}>本ポリシーに関するお問い合わせは、下記リンク先のXアカウントまでお願いいたします。</Typography>
          <Box textAlign="center" pt={2}>
            <Button variant="contained" color="primary" component={RouterLink} to="https://x.com/ju_to_sh">
              運営者リンク
            </Button>
          </Box>

          {/* </List> */}
        </Box>
      </Box>
    </Grid>
  );
});
