import { StyleSheet } from "react-native";

export const colors = {
  primary: "#1F1F2E",
  primaryDark: "#11111A",

  secondary: "#8B5CF6",
  secondaryDark: "#6D3FD9",
  secondaryLight: "#EDE7FF",

  accentGold: "#F5B841",
  accentPink: "#FF6FAE",
  accentBlue: "#49C6E5",
  accentGreen: "#54D6A7",
  accentCoral: "#FF8A65",

  background: "#FFFDF8",
  backgroundSoft: "#F7F2FF",

  card: "#FFFFFF",
  cardSoft: "#FAF7FF",

  textPrimary: "#1F1F2E",
  textSecondary: "#6E6A7C",
  textLight: "#FFFFFF",

  border: "#E9DFFF",

  success: "#2E8B57",
  error: "#B23A48",
  warning: "#D4A017",
};

export const spacing = {
  xs: 6,
  sm: 10,
  md: 16,
  lg: 24,
  xl: 32,
};

export const appStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
  },

  centerScreen: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
    justifyContent: "center",
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
    marginBottom: spacing.sm,
    letterSpacing: 0.5,
  },

  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: "center",
    marginBottom: spacing.lg,
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: colors.textPrimary,
    marginBottom: 12,
  },

  card: {
    width: "100%",
    backgroundColor: colors.card,
    borderRadius: 28,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 18,
    shadowColor: colors.secondaryDark,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
  },

  heroCard: {
    backgroundColor: colors.secondary,
    borderRadius: 28,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },

  heroTitle: {
    color: colors.primary,
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: spacing.sm,
  },

  heroText: {
    color: colors.primary,
    fontSize: 15,
    lineHeight: 22,
  },

  input: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    fontSize: 16,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  primaryButton: {
    backgroundColor: colors.secondary,
    paddingVertical: spacing.md,
    borderRadius: 18,
    alignItems: "center",
    marginTop: spacing.sm,
  },

  primaryButtonText: {
    color: colors.textLight,
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.3,
  },
  secondaryButton: {
    backgroundColor: colors.secondaryLight,
    paddingVertical: spacing.md,
    borderRadius: 18,
    alignItems: "center",
    marginTop: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  secondaryButtonText: {
    color: colors.secondaryDark,
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.3,
  },
  outlineButton: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.secondary,
    paddingVertical: spacing.md,
    borderRadius: 18,
    alignItems: "center",
    marginTop: spacing.sm,
  },
  outlineButtonText: {
    color: colors.secondaryDark,
    fontSize: 16,
    fontWeight: "bold",
  },

  disabledButton: {
    opacity: 0.6,
  },

  linkText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    marginTop: spacing.md,
  },
  normalText: {
    fontSize: 14,
    color: colors.textPrimary,
    lineHeight: 21,
  },

  mutedText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },

  errorText: {
    fontSize: 14,
    color: colors.error,
    marginBottom: spacing.sm,
    textAlign: "center",
  },

  successText: {
    fontSize: 14,
    color: colors.success,
    marginBottom: spacing.sm,
    textAlign: "center",
  },

  imagePreview: {
    width: "100%",
    height: 240,
    borderRadius: 22,
    marginBottom: spacing.md,
    backgroundColor: colors.border,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  spaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  homeContainer: {
    flex: 1,
    backgroundColor: colors.secondary,
  },

  homeScrollContent: {
    paddingBottom: spacing.lg,
  },

  homeHeroCard: {
    backgroundColor: colors.card,
    margin: spacing.md,
    borderRadius: 28,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.lg,
  },

  logoImage: {
    width: 64,
    height: 64,
    resizeMode: "contain",
    marginRight: spacing.md,
  },

  brandTextContainer: {
    flex: 1,
  },

  brandName: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 4,
  },

  brandTagline: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },

  heroBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#FFF4D6",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: spacing.md,
  },

  heroBadgeText: {
    color: colors.secondaryDark,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.5,
  },

  homeHeroTitleLarge: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.primary,
    lineHeight: 38,
    marginBottom: spacing.sm,
  },

  homeHeroText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 23,
    marginBottom: spacing.md,
  },

  sectionBlock: {
    paddingHorizontal: spacing.md,
    marginTop: spacing.sm,
  },

  sectionMiniTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textSecondary,
    marginBottom: spacing.sm,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },

  premiumCard: {
    backgroundColor: colors.card,
    borderRadius: 24,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },

  premiumCardNumber: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.secondary,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: spacing.sm,
  },

  premiumCardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: spacing.xs,
  },

  premiumCardText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 21,
  },

  quickActionsRow: {
    flexDirection: "row",
    gap: spacing.md,
    marginTop: spacing.sm,
  },

  actionCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },

  actionCardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 6,
  },

  actionCardText: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 19,
  },

  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8B5CF6",
  },

  splashContent: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  splashLogo: {
    width: "99%",
    height: 260,
    resizeMode: "contain",
    transform: [{ translateX: 38 }],
  },

  splashAppName: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: 0.5,
  },

  authContainer: {
    flex: 1,
    backgroundColor: colors.secondary,
  },

  authScrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 24,
  },

  authHeader: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    paddingTop: 10,
  },

  authLogoWrapper: {
    width: "100%",
    height: 170,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
    backgroundColor: "transparent",
    borderRadius: 0,
    shadowOpacity: 0,
    elevation: 0,
  },

  authLogo: {
    width: 300,
    height: 160,
    resizeMode: "contain",
  },

  authTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: spacing.xs,
    textAlign: "center",
    letterSpacing: 0.4,
  },

  authSubtitle: {
    fontSize: 15,
    color: "#FFF4D6",
    textAlign: "center",
    lineHeight: 22,
    maxWidth: 330,
  },

  authCard: {
    backgroundColor: colors.card,
    borderRadius: 30,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.secondaryDark,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
  },

  authCardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: spacing.xs,
    textAlign: "center",
  },

  authCardText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 20,
    marginBottom: spacing.lg,
  },

  authLabel: {
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: "700",
    marginBottom: spacing.xs,
  },

  authInput: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    paddingHorizontal: spacing.md,
    paddingVertical: 14,
    fontSize: 15,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },

  authButton: {
    backgroundColor: colors.secondary,
    borderRadius: 18,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: spacing.sm,
  },

  authButtonText: {
    color: colors.card,
    fontSize: 16,
    fontWeight: "bold",
  },

  authLinkButton: {
    marginTop: spacing.lg,
    alignItems: "center",
  },

  authLinkText: {
    fontSize: 15,
    color: colors.secondaryDark,
    fontWeight: "700",
    textAlign: "center",
  },

  authFooterText: {
    fontSize: 13,
    color: "#FFF4D6",
    textAlign: "center",
    marginTop: spacing.lg,
    lineHeight: 19,
    paddingHorizontal: spacing.md,
  },
  homeLogoWrapper: {
    width: 70,
    height: 70,
    borderRadius: 22,
    backgroundColor: "#E8A11A",
    justifyContent: "center",
    alignItems: "center",
    marginRight: spacing.md,
  },

  homeLogo: {
    width: 48,
    height: 48,
    resizeMode: "contain",
  },
  homeScrollContentPremium: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xl,
  },

  homeTopArea: {
    alignItems: "center",
    marginBottom: spacing.lg,
  },

  homeLogoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#E8A11A",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.md,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },

  homePremiumLogo: {
    width: 82,
    height: 82,
    resizeMode: "contain",
  },

  homePremiumTitle: {
    fontSize: 42,
    fontWeight: "bold",
    color: colors.card,
    textAlign: "center",
    letterSpacing: 0.5,
  },

  homePremiumSubtitle: {
    fontSize: 15,
    color: "#FFF4D6",
    textAlign: "center",
    lineHeight: 22,
    marginTop: spacing.xs,
    maxWidth: 330,
  },

  homeMainCard: {
    backgroundColor: colors.card,
    borderRadius: 34,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: "#F3E4B5",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 8,
  },

  homeBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#FFF4D6",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 7,
    marginBottom: spacing.md,
  },

  homeBadgeText: {
    fontSize: 12,
    fontWeight: "800",
    color: colors.secondaryDark,
    letterSpacing: 0.6,
  },

  homeMainTitle: {
    fontSize: 31,
    fontWeight: "bold",
    color: colors.primary,
    lineHeight: 38,
    marginBottom: spacing.sm,
  },

  homeMainText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 23,
    marginBottom: spacing.lg,
  },

  homeFlowRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.lg,
  },

  homeFlowItem: {
    alignItems: "center",
  },

  homeFlowNumber: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.secondary,
    color: colors.primary,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    marginBottom: spacing.xs,
  },

  homeFlowText: {
    fontSize: 13,
    color: colors.textSecondary,
    fontWeight: "700",
  },

  homeFlowLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
    marginHorizontal: spacing.sm,
    marginBottom: 22,
  },

  homeQuickSection: {
    marginTop: spacing.lg,
  },

  homeQuickTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#FFF4D6",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: spacing.sm,
  },

  homeQuickRow: {
    flexDirection: "row",
    gap: spacing.md,
  },

  homeQuickCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 24,
    padding: spacing.md,
    minHeight: 125,
    borderWidth: 1,
    borderColor: "#F3E4B5",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
  },

  homeQuickCardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: spacing.xs,
  },

  homeQuickCardText: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 19,
  },
  homeSimpleContent: {
    flexGrow: 1,
    paddingHorizontal: spacing.md,
    paddingTop: 120,
    paddingBottom: spacing.xl,
  },

  homeSimpleHeader: {
    alignItems: "center",
    marginBottom: spacing.xl,
  },

  homeSimpleLogo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: spacing.md,
  },

  homeSimpleTitle: {
    fontSize: 42,
    fontWeight: "bold",
    color: colors.card,
    textAlign: "center",
  },

  homeSimpleSubtitle: {
    fontSize: 17,
    color: "#FFF4D6",
    textAlign: "center",
    lineHeight: 24,
    marginTop: spacing.xs,
    maxWidth: 310,
  },

  homeActionCard: {
    backgroundColor: colors.card,
    borderRadius: 34,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: "#F3E4B5",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 8,
  },

  homeActionTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
    marginBottom: spacing.sm,
  },

  homeActionText: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 23,
    marginBottom: spacing.lg,
  },

  homeSimpleOptions: {
    flexDirection: "row",
    gap: spacing.md,
  },

  homeOptionCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 24,
    padding: spacing.md,
    minHeight: 115,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#F3E4B5",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
  },

  homeOptionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: spacing.xs,
  },

  homeOptionText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  homeTimelineRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
    marginTop: 10,
  },
  homeTimelineStep: {
    alignItems: "center",
    width: 70,
  },
  homeTimelineCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
    shadowColor: colors.secondaryDark,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.13,
    shadowRadius: 6,
    elevation: 4,
  },
  homeTimelineNumber: {
    fontSize: 17,
    fontWeight: "900",
    textAlign: "center",
  },
  homeTimelineLabel: {
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
  },
  homeTimelineLine: {
    flex: 1,
    height: 2,
    backgroundColor: colors.border,
    marginHorizontal: 6,
    marginBottom: 24,
  },

  homeTimelineCircleActive: {
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  homeTimelineCircleInactive: {
    backgroundColor: colors.secondaryLight,
    borderWidth: 1,
    borderColor: colors.border,
  },
  homeTimelineNumberActive: {
    color: colors.textLight,
  },
  homeTimelineNumberInactive: {
    color: colors.secondaryDark,
  },
  homeTimelineLabelActive: {
    color: colors.secondaryDark,
    fontWeight: "900",
  },
  homeTimelineLabelInactive: {
    color: colors.textSecondary,
    fontWeight: "800",
  },

  // =======================
  // CAMERA SCREEN
  // =======================
  cameraFlowContainer: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 24,
  },
  cameraFlowCard: {
    width: "100%",
    backgroundColor: colors.card,
    borderRadius: 28,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.secondaryDark,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
  },

  cameraFlowTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: colors.textPrimary,
    marginBottom: 12,
  },

  cameraPermissionText: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.textSecondary,
    textAlign: "center",
    marginBottom: 20,
  },
  cameraFrame: {
    width: "100%",
    height: 280,
    borderRadius: 22,
    overflow: "hidden",
    backgroundColor: colors.cardSoft,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
  },

  cameraRealView: {
    width: "100%",
    height: "100%",
  },

  cameraPhotoPreview: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 22,
  },
  cameraHintBox: {
    width: "100%",
    marginTop: 14,
    marginBottom: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 18,
    backgroundColor: colors.secondaryLight,
  },

  cameraHintText: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.secondaryDark,
    textAlign: "center",
    lineHeight: 18,
  },

  cameraButtonGroup: {
    width: "100%",
    gap: 14,
  },
  cameraTopBar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  cameraBackButton: {
    minWidth: 82,
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },

  cameraBackButtonText: {
    fontSize: 13,
    fontWeight: "800",
    color: colors.secondaryDark,
  },

  cameraStepText: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.secondaryLight,
  },

  inputContainer: {
    marginBottom: 16,
  },

  inputLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: 8,
  },

  textArea: {
    minHeight: 100,
    textAlignVertical: "top",
  },

  inputError: {
    borderColor: colors.error,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    marginVertical: spacing.md,
  },

  loadingText: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: "600",
  },

  errorMessageContainer: {
    backgroundColor: "#FDECEF",
    borderWidth: 1,
    borderColor: colors.error,
    borderRadius: 14,
    padding: spacing.sm,
    marginBottom: spacing.md,
  },

  errorMessageText: {
    color: colors.error,
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
  formScrollContent: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 36,
  },

  sectionText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 18,
    lineHeight: 21,
  },
  productImageWrapper: {
    width: "100%",
    height: 240,
    borderRadius: 22,
    overflow: "hidden",
    backgroundColor: colors.cardSoft,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  productImagePreview: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  formCard: {
    width: "100%",
    backgroundColor: colors.card,
    borderRadius: 28,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 18,
    shadowColor: colors.secondaryDark,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
  },

  historyListContent: {
    paddingBottom: 40,
  },

  historyCard: {
    backgroundColor: colors.card,
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 16,
  },

  historyImage: {
    width: "100%",
    height: 160,
    borderRadius: 14,
    resizeMode: "cover",
    marginBottom: 12,
  },

  historyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: 8,
  },

  historyDate: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 6,
  },
  historyActions: {
    marginTop: 14,
    gap: 10,
  },
  deleteConfirmBox: {
    backgroundColor: colors.background,
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: 14,
  },

  homePremiumContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },

  homePremiumContent: {
    flexGrow: 1,
    paddingHorizontal: spacing.md,
    paddingTop: 58,
    paddingBottom: spacing.xl,
  },

  homePremiumHeader: {
    marginBottom: spacing.lg,
  },

  homeGreetingText: {
    fontSize: 15,
    color: colors.textSecondary,
    fontWeight: "600",
    marginBottom: spacing.xs,
  },

  homeGreetingName: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.textPrimary,
    lineHeight: 36,
  },

  homeHeroPremiumCard: {
    backgroundColor: colors.primary,
    borderRadius: 32,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 8,
  },

  homeHeroTopRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.lg,
  },

  homeHeroLogoBox: {
    width: 74,
    height: 74,
    borderRadius: 24,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: spacing.md,
  },

  homeHeroLogo: {
    width: 52,
    height: 52,
    resizeMode: "contain",
  },

  homeHeroBrandSmall: {
    fontSize: 13,
    color: colors.secondaryLight,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 4,
  },

  homeHeroBrandTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.textLight,
  },

  homeHeroPremiumTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.textLight,
    lineHeight: 32,
    marginBottom: spacing.sm,
  },

  homeHeroPremiumText: {
    fontSize: 15,
    color: "#F8EAC4",
    lineHeight: 22,
    marginBottom: spacing.lg,
  },

  homeStepsCard: {
    backgroundColor: colors.card,
    borderRadius: 28,
    padding: spacing.md,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },

  homeStepsTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },

  homeStepsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  homeStepItem: {
    alignItems: "center",
    width: 82,
  },

  homeStepCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.cardSoft,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.xs,
  },

  homeStepCircleActive: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },

  homeStepText: {
    fontSize: 13,
    color: colors.textSecondary,
    fontWeight: "700",
    textAlign: "center",
  },

  homeStepLine: {
    flex: 1,
    height: 2,
    backgroundColor: colors.border,
    marginHorizontal: 2,
    marginBottom: 24,
  },

  homeMiniCardsRow: {
    flexDirection: "row",
    gap: spacing.md,
  },

  homeMiniCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 24,
    padding: spacing.md,
    minHeight: 128,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },

  homeMiniIconBox: {
    width: 42,
    height: 42,
    borderRadius: 16,
    backgroundColor: colors.cardSoft,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.sm,
  },

  homeMiniCardTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },

  homeMiniCardText: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  homeCanvaContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },

  homeCanvaContent: {
    flexGrow: 1,
    paddingHorizontal: spacing.md,
    paddingTop: 54,
    paddingBottom: spacing.xl,
  },

  homeCanvaHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.lg,
  },

  homeCanvaGreeting: {
    flex: 1,
  },

  homeCanvaHello: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: "600",
    marginBottom: 3,
  },

  homeCanvaName: {
    fontSize: 29,
    fontWeight: "bold",
    color: colors.textPrimary,
  },

  homeCanvaAvatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: colors.card,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },

  homeCanvaAvatarText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondaryDark,
  },

  homeCanvaHeroCard: {
    backgroundColor: colors.card,
    borderRadius: 32,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.09,
    shadowRadius: 14,
    elevation: 6,
  },

  homeCanvaBadge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: colors.cardSoft,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },

  homeCanvaBadgeText: {
    fontSize: 12,
    color: colors.secondaryDark,
    fontWeight: "800",
    marginLeft: 6,
    letterSpacing: 0.4,
  },

  homeCanvaHeroTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.textPrimary,
    lineHeight: 37,
    marginBottom: spacing.sm,
  },

  homeCanvaHeroText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
    marginBottom: spacing.lg,
  },

  homeCanvaButtonRow: {
    flexDirection: "row",
    gap: spacing.sm,
  },

  homeCanvaPrimaryAction: {
    flex: 1.3,
    backgroundColor: colors.secondary,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: spacing.md,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  homeCanvaPrimaryActionText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: "800",
    marginLeft: 8,
  },

  homeCanvaSecondaryAction: {
    flex: 1,
    backgroundColor: colors.cardSoft,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: spacing.md,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },

  homeCanvaSecondaryActionText: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "800",
    marginLeft: 8,
  },

  homeCanvaSectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.sm,
  },

  homeCanvaSectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.textPrimary,
  },

  homeCanvaSectionHint: {
    fontSize: 13,
    color: colors.secondaryDark,
    fontWeight: "700",
  },

  homeCanvaQuickGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
    marginBottom: spacing.lg,
  },

  homeCanvaQuickCard: {
    width: "47.8%",
    backgroundColor: colors.card,
    borderRadius: 26,
    padding: spacing.md,
    minHeight: 132,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.07,
    shadowRadius: 10,
    elevation: 4,
  },

  homeCanvaIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 18,
    backgroundColor: colors.cardSoft,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },

  homeCanvaQuickTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginBottom: 5,
  },

  homeCanvaQuickText: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },

  homeCanvaFlowCard: {
    backgroundColor: colors.card,
    borderRadius: 30,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.lg,
  },

  homeCanvaFlowRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  homeCanvaFlowItem: {
    alignItems: "center",
    width: 82,
  },

  homeCanvaFlowIcon: {
    width: 50,
    height: 50,
    borderRadius: 19,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.cardSoft,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.xs,
  },

  homeCanvaFlowIconActive: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },

  homeCanvaFlowText: {
    fontSize: 13,
    color: colors.textSecondary,
    fontWeight: "800",
    textAlign: "center",
  },

  homeCanvaFlowLine: {
    flex: 1,
    height: 2,
    backgroundColor: colors.border,
    marginHorizontal: 4,
    marginBottom: 25,
  },

  homeCanvaTipCard: {
    backgroundColor: colors.primary,
    borderRadius: 28,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },

  homeCanvaTipBadge: {
    alignSelf: "flex-start",
    backgroundColor: colors.secondary,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: spacing.sm,
  },

  homeCanvaTipBadgeText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "900",
  },

  homeCanvaTipTitle: {
    color: colors.textLight,
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: spacing.xs,
  },

  homeCanvaTipText: {
    color: "#F8EAC4",
    fontSize: 14,
    lineHeight: 21,
  },
  homeCanvaQuickCardPhoto: {
    backgroundColor: "#FFF7E2",
  },

  homeCanvaQuickCardGallery: {
    backgroundColor: "#FFF3F8",
  },

  homeCanvaQuickCardHistory: {
    backgroundColor: "#F2FFF8",
  },

  homeCanvaQuickCardTips: {
    backgroundColor: "#F4F1FF",
  },

  homeCanvaIconCirclePhoto: {
    backgroundColor: "#F8D77B",
    borderColor: "#E8BD3A",
  },

  homeCanvaIconCircleGallery: {
    backgroundColor: "#F6C7DD",
    borderColor: "#E9A7C3",
  },

  homeCanvaIconCircleHistory: {
    backgroundColor: "#BFEED2",
    borderColor: "#8DD8AE",
  },

  homeCanvaIconCircleTips: {
    backgroundColor: "#D8C9FF",
    borderColor: "#BFA8F5",
  },

  homeCanvaCarousel: {
    marginBottom: spacing.lg,
  },

  homeCanvaCarouselContent: {
    paddingRight: spacing.md,
  },

  homeCanvaIdeaCard: {
    width: 230,
    backgroundColor: colors.card,
    borderRadius: 28,
    padding: spacing.md,
    marginRight: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.07,
    shadowRadius: 10,
    elevation: 4,
  },

  homeCanvaIdeaIcon: {
    width: 50,
    height: 50,
    borderRadius: 19,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.sm,
    borderWidth: 1,
  },

  homeCanvaIdeaIconGold: {
    backgroundColor: "#F8D77B",
    borderColor: "#E8BD3A",
  },

  homeCanvaIdeaIconPink: {
    backgroundColor: "#F6C7DD",
    borderColor: "#E9A7C3",
  },

  homeCanvaIdeaIconPurple: {
    backgroundColor: "#D8C9FF",
    borderColor: "#BFA8F5",
  },

  homeCanvaIdeaIconGreen: {
    backgroundColor: "#BFEED2",
    borderColor: "#8DD8AE",
  },

  homeCanvaIdeaTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },

  homeCanvaIdeaText: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 19,
  },
  homeProContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },

  homeProScrollContent: {
    flexGrow: 1,
    width: "100%",
    maxWidth: 480,
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 28,
  },

  homeProTopGlow: {
    position: "absolute",
    top: -90,
    left: -70,
    width: 230,
    height: 230,
    borderRadius: 115,
    backgroundColor: "#DFF7FF",
    opacity: 0.9,
  },

  homeProSecondGlow: {
    position: "absolute",
    top: -70,
    right: -80,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "#EADFFF",
    opacity: 0.95,
  },

  homeProHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 26,
  },

  homeProAvatarSmall: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.card,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 5,
  },

  homeProAvatarText: {
    fontSize: 16,
    fontWeight: "900",
    color: colors.secondaryDark,
  },

  homeProGreeting: {
    fontSize: 15,
    color: colors.textSecondary,
    fontWeight: "700",
    marginBottom: 4,
  },

  homeProName: {
    fontSize: 34,
    fontWeight: "900",
    color: colors.textPrimary,
    letterSpacing: -0.6,
  },

  homeProSearchCard: {
    backgroundColor: colors.card,
    borderRadius: 30,
    paddingHorizontal: 18,
    paddingVertical: 18,
    marginBottom: 18,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EFE7FF",
    shadowColor: "#6D3FD9",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.11,
    shadowRadius: 18,
    elevation: 6,
  },

  homeProSearchText: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: "700",
    color: colors.textSecondary,
  },

  homeProChipScroll: {
    marginBottom: 26,
  },

  homeProChipContent: {
    paddingRight: 20,
  },

  homeProChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    paddingHorizontal: 16,
    paddingVertical: 11,
    borderRadius: 999,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },

  homeProChipText: {
    fontSize: 14,
    fontWeight: "800",
    color: colors.textPrimary,
    marginLeft: 8,
  },

  homeProMainTitle: {
    fontSize: 31,
    fontWeight: "900",
    color: colors.textPrimary,
    lineHeight: 38,
    letterSpacing: -0.7,
    marginBottom: 8,
  },

  homeProMainSubtitle: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
    marginBottom: 20,
  },

  homeProHeroCard: {
    backgroundColor: colors.secondary,
    borderRadius: 34,
    padding: 22,
    marginBottom: 28,
    overflow: "hidden",
    shadowColor: colors.secondaryDark,
    shadowOffset: {
      width: 0,
      height: 14,
    },
    shadowOpacity: 0.22,
    shadowRadius: 22,
    elevation: 9,
  },

  homeProHeroCircleOne: {
    position: "absolute",
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#FFFFFF",
    opacity: 0.18,
    right: -35,
    top: -35,
  },

  homeProHeroCircleTwo: {
    position: "absolute",
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#D9A7F5",
    opacity: 0.45,
    right: 40,
    bottom: -30,
  },

  homeProHeroBadge: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(255,255,255,0.22)",
    borderRadius: 999,
    paddingHorizontal: 13,
    paddingVertical: 7,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },

  homeProHeroBadgeText: {
    color: colors.textLight,
    fontSize: 12,
    fontWeight: "900",
    marginLeft: 6,
    letterSpacing: 0.4,
  },

  homeProHeroTitle: {
    color: colors.textLight,
    fontSize: 27,
    fontWeight: "900",
    lineHeight: 33,
    marginBottom: 8,
    maxWidth: 310,
  },

  homeProHeroText: {
    color: "#F4EDFF",
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 18,
    maxWidth: 330,
  },

  homeProHeroButton: {
    backgroundColor: colors.card,
    borderRadius: 22,
    paddingVertical: 15,
    paddingHorizontal: 18,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },

  homeProHeroButtonText: {
    color: colors.secondaryDark,
    fontSize: 15,
    fontWeight: "900",
    marginLeft: 8,
  },

  homeProSectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  homeProSectionTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: colors.textPrimary,
    letterSpacing: -0.4,
  },

  homeProSectionLink: {
    fontSize: 14,
    fontWeight: "800",
    color: colors.secondaryDark,
  },

  homeProQuickGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 28,
  },

  homeProQuickCard: {
    width: "48%",
    backgroundColor: colors.card,
    borderRadius: 28,
    padding: 16,
    minHeight: 146,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#EFE7FF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.07,
    shadowRadius: 14,
    elevation: 5,
  },

  homeProQuickIconWrap: {
    width: 54,
    height: 54,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },

  homeProIconBlue: {
    backgroundColor: "#DDF7FF",
  },

  homeProIconPink: {
    backgroundColor: "#FFE3F0",
  },

  homeProIconGreen: {
    backgroundColor: "#DDFBEF",
  },

  homeProIconGold: {
    backgroundColor: "#FFF0C7",
  },

  homeProQuickTitle: {
    fontSize: 17,
    fontWeight: "900",
    color: colors.textPrimary,
    marginBottom: 5,
  },

  homeProQuickText: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },

  homeProTemplateScroll: {
    marginBottom: 28,
  },

  homeProTemplateContent: {
    paddingRight: 20,
  },

  homeProTemplateCard: {
    width: 132,
    marginRight: 14,
  },

  homeProTemplateImage: {
    height: 112,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    overflow: "hidden",
  },

  homeProTemplateImagePink: {
    backgroundColor: "#FFD6EA",
  },

  homeProTemplateImageBlue: {
    backgroundColor: "#D6F4FF",
  },

  homeProTemplateImagePurple: {
    backgroundColor: "#E6DDFF",
  },

  homeProTemplateImageGreen: {
    backgroundColor: "#D7FBEA",
  },

  homeProTemplateImageGold: {
    backgroundColor: "#FFE9AD",
  },

  homeProTemplateMiniCircle: {
    position: "absolute",
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "rgba(255,255,255,0.45)",
    right: -18,
    top: -18,
  },

  homeProTemplateTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: colors.textPrimary,
    textAlign: "center",
  },

  homeProAiCard: {
    backgroundColor: colors.card,
    borderRadius: 34,
    padding: 20,
    marginBottom: 26,
    borderWidth: 1,
    borderColor: "#EFE7FF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.07,
    shadowRadius: 14,
    elevation: 5,
  },

  homeProAiHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  homeProAiIcon: {
    width: 56,
    height: 56,
    borderRadius: 20,
    backgroundColor: colors.secondaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  homeProAiTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: "900",
    color: colors.textPrimary,
    lineHeight: 25,
  },

  homeProAiText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 21,
    marginBottom: 16,
  },

  homeProAiSteps: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  homeProAiStep: {
    alignItems: "center",
    flex: 1,
  },

  homeProAiStepCircle: {
    width: 42,
    height: 42,
    borderRadius: 16,
    backgroundColor: colors.backgroundSoft,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 7,
  },

  homeProAiStepText: {
    fontSize: 12,
    fontWeight: "800",
    color: colors.textSecondary,
    textAlign: "center",
  },
  homeProMainActionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 28,
  },

  homeProMainActionCard: {
    width: "48%",
    backgroundColor: colors.card,
    borderRadius: 30,
    padding: 18,
    minHeight: 158,
    borderWidth: 1,
    borderColor: "#EFE7FF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.07,
    shadowRadius: 14,
    elevation: 5,
  },

  homeProMainActionCardPrimary: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  homeProMainActionCardAccent: {
    backgroundColor: "#FFE6F3",
    borderColor: "#FFD1E6",
  },

  homeProMainActionIconAccent: {
    backgroundColor: "rgba(255,255,255,0.55)",
  },

  homeProMainActionIcon: {
    width: 58,
    height: 58,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },

  homeProMainActionIconWhite: {
    backgroundColor: "rgba(255,255,255,0.22)",
  },

  homeProMainActionIconSoft: {
    backgroundColor: colors.secondaryLight,
  },

  homeProMainActionTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: colors.textPrimary,
    marginBottom: 6,
  },

  homeProMainActionTitleLight: {
    color: colors.textLight,
  },

  homeProMainActionText: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },

  homeProMainActionTextLight: {
    color: "#F4EDFF",
  },

  homeProToolGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 28,
  },

  homeProToolCard: {
    width: "48%",
    backgroundColor: colors.card,
    borderRadius: 26,
    padding: 16,
    minHeight: 132,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#EFE7FF",
  },

  homeProToolIcon: {
    width: 50,
    height: 50,
    borderRadius: 19,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  homeProToolTitle: {
    fontSize: 16,
    fontWeight: "900",
    color: colors.textPrimary,
    marginBottom: 5,
  },

  homeProToolText: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },

  homeProSoonCard: {
    backgroundColor: colors.card,
    borderRadius: 34,
    padding: 20,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: "#EFE7FF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.07,
    shadowRadius: 14,
    elevation: 5,
  },

  homeProSoonTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: colors.textPrimary,
    marginBottom: 6,
  },

  homeProSoonText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },

  homeProSocialRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  homeProSocialChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.backgroundSoft,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#EFE7FF",
  },

  homeProSocialText: {
    fontSize: 13,
    fontWeight: "800",
    color: colors.textPrimary,
    marginLeft: 7,
  },
  splashSubtitle: {
    marginTop: 10,
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
    paddingHorizontal: 32,
  },
  screenHeaderContainer: {
    width: "100%",
    marginBottom: 16,
  },
  screenHeaderTopRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  screenHeaderButton: {
    minWidth: 82,
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.75)",
    alignItems: "center",
    justifyContent: "center",
  },
  screenHeaderButtonText: {
    fontSize: 13,
    fontWeight: "800",
    color: colors.secondaryDark,
  },
  screenHeaderTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: colors.textLight,
    textAlign: "left",
  },
  screenHeaderStepText: {
    marginTop: 4,
    fontSize: 13,
    fontWeight: "700",
    color: colors.secondaryLight,
    textAlign: "left",
  },

  // =======================
  // AI RESULT SCREEN
  // =======================
  aiResultScreen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  aiResultScrollContent: {
    paddingBottom: 36,
  },
  aiResultHeaderArea: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 18,
  },
  aiResultBody: {
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  aiResultMainCard: {
    width: "100%",
    backgroundColor: colors.card,
    borderRadius: 28,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 18,
    shadowColor: colors.secondaryDark,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
  },
  aiResultCard: {
    width: "100%",
    backgroundColor: colors.card,
    borderRadius: 28,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 18,
    shadowColor: colors.secondaryDark,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
  },
  aiResultCardTitle: {
    fontSize: 21,
    fontWeight: "900",
    color: colors.textPrimary,
    marginBottom: 10,
  },
  aiResultText: {
    fontSize: 14,
    color: colors.textPrimary,
    lineHeight: 21,
  },
  aiResultMutedText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 21,
    marginBottom: 14,
  },
  aiResultButtonArea: {
    marginTop: 4,
    marginBottom: 4,
  },

  // =======================
  // CATALOG / HISTORY SCREEN
  // =======================
  catalogScreen: {
    flex: 1,
    backgroundColor: colors.background,
  },

  catalogHeaderArea: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 18,
  },

  catalogBody: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingTop: 18,
  },

  catalogListContent: {
    paddingBottom: 40,
  },

  catalogCard: {
    backgroundColor: colors.card,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 18,
    overflow: "hidden",
    shadowColor: colors.secondaryDark,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
  },

  catalogImageWrapper: {
    width: "100%",
    height: 165,
    backgroundColor: colors.cardSoft,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },

  catalogImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  catalogContent: {
    padding: 14,
  },

  catalogTitle: {
    fontSize: 17,
    fontWeight: "900",
    color: colors.textPrimary,
    marginBottom: 8,
  },

  catalogDescription: {
    fontSize: 13,
    color: colors.textPrimary,
    lineHeight: 19,
    marginBottom: 10,
  },

  catalogPriceChip: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: colors.secondaryLight,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 8,
  },

  catalogPriceChipText: {
    fontSize: 12,
    fontWeight: "800",
    color: colors.secondaryDark,
    marginLeft: 5,
  },

  catalogDate: {
    fontSize: 11,
    color: colors.textSecondary,
    marginBottom: 12,
  },

  catalogActionsRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 4,
  },

  catalogActionChip: {
    flex: 1,
    minHeight: 40,
    borderRadius: 999,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  catalogActionChipPrimary: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },

  catalogActionChipDanger: {
    backgroundColor: "#FFF5F7",
    borderColor: "#F3C7D0",
  },

  catalogActionChipDisabled: {
    opacity: 0.6,
  },

  catalogActionChipText: {
    fontSize: 13,
    fontWeight: "900",
    color: colors.secondaryDark,
    marginLeft: 5,
  },

  catalogActionChipTextPrimary: {
    color: colors.textLight,
  },

  catalogActionChipTextDanger: {
    color: colors.error,
  },

  catalogDeleteBox: {
    backgroundColor: colors.cardSoft,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 12,
    marginTop: 4,
  },

  catalogDeleteTitle: {
    fontSize: 15,
    fontWeight: "900",
    color: colors.textPrimary,
    marginBottom: 5,
  },

  catalogDeleteText: {
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 18,
  },

  catalogEmptyCard: {
    backgroundColor: colors.card,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
    shadowColor: colors.secondaryDark,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
  },

  catalogEmptyIcon: {
    width: 54,
    height: 54,
    borderRadius: 20,
    backgroundColor: colors.secondaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },

  catalogEmptyTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: colors.textPrimary,
    marginBottom: 6,
  },

  catalogEmptyText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },

  catalogCreateButton: {
    backgroundColor: colors.secondary,
    borderRadius: 999,
    paddingVertical: 14,
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  catalogCreateButtonText: {
    color: colors.textLight,
    fontSize: 15,
    fontWeight: "900",
    marginLeft: 8,
  },
  catalogImagePlaceholder: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.cardSoft,
  },

  catalogImagePlaceholderText: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: "700",
    color: colors.secondaryDark,
  },
  // =======================
  // PRODUCT DETAIL SCREEN
  // =======================
  productDetailScreen: {
    flex: 1,
    backgroundColor: colors.background,
  },

  productDetailScrollContent: {
    paddingBottom: 36,
  },

  productDetailHeaderArea: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 18,
  },

  productDetailBody: {
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingTop: 18,
  },

  productDetailPreviewCard: {
    width: "100%",
    backgroundColor: colors.card,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    marginBottom: 18,
    shadowColor: colors.secondaryDark,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
  },

  productDetailPreviewHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  productDetailPreviewIcon: {
    width: 46,
    height: 46,
    borderRadius: 18,
    backgroundColor: colors.secondaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  productDetailPreviewTextBox: {
    flex: 1,
  },

  productDetailPreviewTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: colors.textPrimary,
    marginBottom: 3,
  },

  productDetailPreviewSubtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },

  productDetailImageWrapper: {
    width: "100%",
    height: 220,
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: colors.cardSoft,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },

  productDetailImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  productDetailSocialTitle: {
    fontSize: 19,
    fontWeight: "900",
    color: colors.textPrimary,
    marginBottom: 8,
  },

  productDetailSocialDescription: {
    fontSize: 14,
    color: colors.textPrimary,
    lineHeight: 21,
    marginBottom: 12,
  },

  productDetailInfoRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 10,
  },

  productDetailChip: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: colors.secondaryLight,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: colors.border,
  },

  productDetailChipText: {
    fontSize: 12,
    fontWeight: "800",
    color: colors.secondaryDark,
    marginLeft: 5,
  },

  productDetailHashtags: {
    fontSize: 13,
    color: colors.secondaryDark,
    fontWeight: "800",
    lineHeight: 19,
    marginBottom: 14,
  },

  productDetailSoonButton: {
    backgroundColor: colors.secondary,
    borderRadius: 999,
    paddingVertical: 14,
    paddingHorizontal: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.95,
  },

  productDetailSoonButtonText: {
    color: colors.textLight,
    fontSize: 14,
    fontWeight: "900",
    marginLeft: 8,
    marginRight: 8,
  },

  productDetailSoonBadge: {
    backgroundColor: "rgba(255,255,255,0.22)",
    borderRadius: 999,
    paddingHorizontal: 9,
    paddingVertical: 4,
  },

  productDetailSoonBadgeText: {
    color: colors.textLight,
    fontSize: 10,
    fontWeight: "900",
  },

  productDetailCard: {
    width: "100%",
    backgroundColor: colors.card,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    marginBottom: 18,
    shadowColor: colors.secondaryDark,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
  },

  productDetailEditCard: {
    width: "100%",
    backgroundColor: colors.card,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    marginBottom: 18,
    shadowColor: colors.secondaryDark,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
  },

  productDetailCardTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: colors.textPrimary,
    marginBottom: 12,
  },

  productDetailLine: {
    fontSize: 14,
    color: colors.textPrimary,
    lineHeight: 22,
    marginBottom: 5,
  },

  productDetailText: {
    fontSize: 14,
    color: colors.textPrimary,
    lineHeight: 21,
  },
    // =======================
  // PROFILE SCREEN
  // =======================
  profileScreen: {
    flex: 1,
    backgroundColor: colors.background,
  },

  profileHeaderArea: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 18,
  },

  profileBody: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingTop: 18,
  },

  profileCard: {
    width: "100%",
    backgroundColor: colors.card,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
    marginBottom: 18,
    alignItems: "center",
    shadowColor: colors.secondaryDark,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
  },

  profileAvatar: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: colors.secondaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },

  profileAvatarText: {
    fontSize: 28,
    fontWeight: "900",
    color: colors.secondaryDark,
  },

  profileName: {
    fontSize: 22,
    fontWeight: "900",
    color: colors.textPrimary,
    marginBottom: 4,
    textAlign: "center",
  },

  profileEmail: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
    marginBottom: 18,
  },

  profileInfoBox: {
    width: "100%",
    backgroundColor: colors.cardSoft,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 14,
  },

  profileInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  profileInfoText: {
    flex: 1,
    fontSize: 14,
    color: colors.textPrimary,
    lineHeight: 20,
    marginLeft: 10,
  },

  profileActionsCard: {
    width: "100%",
    backgroundColor: colors.card,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
    shadowColor: colors.secondaryDark,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
  },

  profileActionsTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: colors.textPrimary,
    marginBottom: 6,
  },

  profileActionsText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 14,
  },
});
