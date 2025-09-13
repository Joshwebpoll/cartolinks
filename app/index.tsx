import { PosterType, posterTypes } from "@/models/poster";
import { ImagePlay } from "lucide-react-native";
import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PosterCreationScreen: React.FC = () => {
  const renderPosterType = (poster: PosterType) => (
    <TouchableOpacity
      key={poster.id}
      style={[
        styles.posterCard,
        { backgroundColor: poster.backgroundColor },
        poster.isSelected && styles.selectedCard,
      ]}
    >
      {poster.badge && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{poster.badge}</Text>
        </View>
      )}
      <View style={styles.posterContent}>
        {poster.title ? (
          <Text style={[styles.posterTitle, { color: poster.textColor }]}>
            {poster.title}
          </Text>
        ) : (
          <View style={styles.profilePlaceholder}>
            <View style={styles.profileImage} />
          </View>
        )}
        <Text style={[styles.posterType, { color: poster.textColor }]}>
          {poster.type}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.closeIcon}>×</Text>
        </TouchableOpacity>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.activeTabText}>Smart script</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.inactiveTabText}>Advanced script</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Main Question */}
        <Text style={styles.mainQuestion}>
          What type of posters do you want to create?
        </Text>

        {/* Poster Types Grid */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.posterGrid}
          contentContainerStyle={styles.posterGridContent}
        >
          {posterTypes.map(renderPosterType)}
        </ScrollView>

        {/* Description */}
        <View style={styles.imagePlaceholder}>
          <Text style={styles.description}>
            stunning promotional image of a deliciously decorated cake,
            emphasizing its layers, frosting, and toppings in an enticing
            setting.
          </Text>

          {/* Image Placeholder */}

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
              paddingTop: 30,
            }}
          >
            <ImagePlay color="white" size={30} strokeWidth={1.5} />
          </View>
        </View>
        {/* Settings */}
        <View style={styles.settingsContainer}>
          <Text style={styles.settingsTitle}>Settings</Text>

          <TouchableOpacity style={styles.settingRow}>
            <Text style={styles.settingLabel}>Size</Text>
            <View style={styles.settingValue}>
              <Text style={styles.settingValueText}>1080 x 1920 px</Text>
              <Text style={styles.chevron}>›</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingRow}>
            <Text style={styles.settingLabel}>Category</Text>
            <View style={styles.settingValue}>
              <Text style={styles.settingValueText}>Foods and beverage</Text>
              <Text style={styles.chevron}>›</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Generate Button */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.generateButton}>
          <View style={styles.generateIcon} />
          <Text style={styles.generateText}>Generate</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <View style={styles.capCutLogo}>
            <Text style={styles.capCutText}>⚡ CapCut</Text>
          </View>
          <View style={styles.mobbinCredit}>
            <Text style={styles.creditText}>curated by</Text>
            <Text style={styles.mobbinText}>⛰️ Mobbin</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  closeButton: {
    alignSelf: "flex-start",
  },
  closeIcon: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "300",
  },
  tabContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 20,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#06B6D4",
  },
  activeTabText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  inactiveTabText: {
    color: "#6B7280",
    fontSize: 16,
    fontWeight: "400",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  mainQuestion: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 25,
    lineHeight: 32,
  },
  posterGrid: {
    marginBottom: 25,
  },
  posterGridContent: {
    paddingRight: 20,
  },
  posterCard: {
    width: 100,
    height: 120,
    borderRadius: 12,
    marginRight: 12,
    padding: 12,
    position: "relative",
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: "#06B6D4",
  },
  badge: {
    position: "absolute",
    top: 8,
    left: 8,
    right: 8,
    backgroundColor: "#8B5CF6",
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
  },
  posterContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  posterTitle: {
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 16,
    marginTop: 20,
  },
  profilePlaceholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  posterType: {
    fontSize: 10,
    fontWeight: "400",
    opacity: 0.8,
  },
  descriptionContainer: {
    backgroundColor: "#1A1A1A",
    borderRadius: 12,
    padding: 16,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "#2D2D2D",
  },
  description: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 24,
  },
  imagePlaceholder: {
    backgroundColor: "#1F2937",
    borderRadius: 8,

    marginBottom: 25,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  // imageIcon: {
  //   padding: 12,
  // },
  imageIconText: {
    fontSize: 24,
  },
  settingsContainer: {
    marginBottom: 30,
  },
  settingsTitle: {
    color: "#9CA3AF",
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 20,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#1F2937",
  },
  settingLabel: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "400",
  },
  settingValue: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingValueText: {
    color: "#9CA3AF",
    fontSize: 16,
    marginRight: 8,
  },
  chevron: {
    color: "#6B7280",
    fontSize: 18,
    fontWeight: "300",
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  generateButton: {
    backgroundColor: "#06B6D4",
    borderRadius: 12,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  generateIcon: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    marginRight: 8,
  },
  generateText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  footerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  capCutLogo: {
    flexDirection: "row",
    alignItems: "center",
  },
  capCutText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  mobbinCredit: {
    flexDirection: "row",
    alignItems: "center",
  },
  creditText: {
    color: "#6B7280",
    fontSize: 12,
    marginRight: 4,
  },
  mobbinText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "500",
  },
});

export default PosterCreationScreen;
